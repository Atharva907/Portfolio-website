import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    trim: true,
    maxlength: [50, "Name cannot exceed 50 characters"]
  },
  email: { 
    type: String, 
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
      "Please enter a valid email"
    ]
  },
  message: { 
    type: String, 
    required: [true, "Message is required"],
    trim: true,
    maxlength: [1000, "Message cannot exceed 1000 characters"]
  },
  createdAt: { type: Date, default: Date.now },
});

// Add indexes for better performance
MessageSchema.index({ createdAt: -1 });

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);