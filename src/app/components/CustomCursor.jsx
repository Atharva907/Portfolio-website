"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => {
      const cursor = document.getElementById("custom-cursor");
      if (cursor) {
        cursor.classList.add("scale-75");
      }
    };

    const handleMouseUp = () => {
      const cursor = document.getElementById("custom-cursor");
      if (cursor) {
        cursor.classList.remove("scale-75");
      }
    };

    const checkForPointer = () => {
      const target = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a"
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", checkForPointer);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", checkForPointer);
    };
  }, [position]);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div
      id="custom-cursor"
      className={`fixed z-50 pointer-events-none transition-all duration-100 ${
        isPointer ? "w-8 h-8 bg-purple-500/30" : "w-6 h-6 bg-purple-500/50"
      } rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className={`absolute inset-0 rounded-full ${isPointer ? "bg-purple-500/50" : "bg-purple-500/30"} scale-150 -z-10`}></div>
    </div>
  );
}
