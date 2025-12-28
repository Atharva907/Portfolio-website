import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import CustomCursor from "@/app/components/CustomCursor";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atharva Ganesh Chavan | Portfolio",
  description: "Atharva Ganesh Chavan — Full-Stack Developer & DevOps Engineer Portfolio",
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <>
              <CustomCursor />
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}