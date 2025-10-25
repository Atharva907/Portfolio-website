"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, ExternalLink } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        if (!response.ok) throw new Error("Failed to fetch messages");

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete message");

      setMessages(messages.filter(msg => msg._id !== id));
    } catch (err) {
      alert("Error deleting message: " + err.message);
    }
  };

  if (isLoading) return <div className="flex justify-center items-center h-64">Loading messages...</div>;

  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <p className="text-muted-foreground">
          These are messages submitted through your portfolio contact form.
        </p>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No messages yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message._id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <CardDescription>
                      <a 
                        href={`mailto:${message.email}`} 
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <Mail size={14} />
                        {message.email}
                      </a>
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(message.createdAt).toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{message.message}</p>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(message._id)}
                  >
                    <Trash2 size={16} className="mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
