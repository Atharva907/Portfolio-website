import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Message from "../../../models/Message";

export async function GET() {
  try {
    const db = await connectDB();

    // Return empty array if DB connection is skipped (during build)
    if (!db) {
      return NextResponse.json([]);
    }

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
