import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Message from "../../../../models/Message";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Message ID is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    // Skip database operations during build
    if (!db) {
      return NextResponse.json({ error: "Database not available during build" }, { status: 503 });
    }

    // Find and delete the message
    const result = await Message.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting message:", err);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
