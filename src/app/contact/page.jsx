

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="p-10 min-h-screen bg-gradient-to-tr from-orange-400 via-red-500 to-pink-600">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">Contact Me</h1>

        <div className="p-8 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl">
          <form className="flex flex-col gap-6">
            <div className="relative">
              <Input 
                placeholder="Your Name" 
                className="bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white placeholder-white/70 rounded-xl py-4 px-6 text-lg focus:bg-white/40 focus:border-white transition-all"
              />
              <div className="absolute -right-3 -top-3 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
            </div>

            <div className="relative">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white placeholder-white/70 rounded-xl py-4 px-6 text-lg focus:bg-white/40 focus:border-white transition-all"
              />
              <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-400 rounded-full shadow-lg"></div>
            </div>

            <div className="relative">
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white placeholder-white/70 rounded-xl py-4 px-6 text-lg focus:bg-white/40 focus:border-white transition-all resize-none"
              />
              <div className="absolute -right-3 -bottom-3 w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 text-lg"
              >
                Send Message
              </Button>
              <Button 
                type="button"
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 hover:bg-white/30 text-lg"
              >
                Reset
              </Button>
            </div>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            {[
              { color: "bg-blue-400", delay: "delay-75" },
              { color: "bg-green-400", delay: "delay-150" },
              { color: "bg-yellow-400", delay: "delay-300" },
              { color: "bg-red-400", delay: "" },
              { color: "bg-purple-400", delay: "delay-75" }
            ].map((item, index) => (
              <div key={index} className={`w-4 h-4 ${item.color} rounded-full animate-bounce ${item.delay}`}></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

