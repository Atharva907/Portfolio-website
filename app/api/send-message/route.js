import { NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "../../../lib/mongodb";
import Message from "../../../models/Message";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Connect to database
    try {
      const db = await connectDB();

      // Save to MongoDB with error handling
      try {
        await Message.create({ name, email, message });
        console.log("✅ Message saved to MongoDB");
      } catch (dbError) {
        console.error("Database error:", dbError);
        return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
      }
    } catch (connectionError) {
      console.error("Database connection error:", connectionError);
      return NextResponse.json({ 
        error: "Database connection failed. Please try again later.",
        details: process.env.NODE_ENV === "development" ? connectionError.message : undefined
      }, { status: 500 });
    }

    // Send Email via Resend with error handling
    try {
      const emailResponse = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Portfolio Message</h2>
            <div style="padding: 15px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
              <div style="margin-top: 15px;">
                <p><strong>Message:</strong></p>
                <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 20px; font-size: 12px; color: #888;">
              <p>This message was sent from your portfolio website.</p>
            </div>
          </div>
        `,
      });
      
      console.log("✅ Email sent successfully:", emailResponse.id);
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Still return success since message was saved to database
      return NextResponse.json({ 
        success: true, 
        warning: "Message saved but email notification failed" 
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ 
      error: "Server error. Please try again later.",
      details: process.env.NODE_ENV === "development" ? err.message : undefined
    }, { status: 500 });
  }
}