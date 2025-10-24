

export default function AboutPage() {
  return (
    <main className="p-10 text-center min-h-screen bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600">
      <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 shadow-xl transform transition hover:rotate-6 duration-500"></div>
          <div className="text-left">
            <p className="text-white/95 text-lg leading-relaxed mb-4">
              I'm Atharva, a web developer and designer with a focus on modern UI and performance.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              I love creating vibrant, interactive experiences that delight users and make the web a more colorful place.
            </p>
            <p className="text-white/85 text-lg leading-relaxed">
              My expertise spans across frontend and backend technologies, with a special passion for beautiful design and smooth animations.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "JavaScript", "CSS", "Tailwind", "Node.js", "UI/UX"].map(skill => (
            <span key={skill} className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-white font-medium shadow-md transform transition hover:scale-105">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

