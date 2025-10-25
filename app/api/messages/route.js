import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Message from "../../../models/Message";

export async function GET() {
  try {
    await connectDB();

    // Fetch all messages, sorted by newest first
    const messages = await Message.find({}).sort({ createdAt: -1 });

    return NextResponse.json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
