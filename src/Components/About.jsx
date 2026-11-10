function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#0b101b] text-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-[140px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-start">

            <div className="relative">

              {/* Decorative line */}
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-cyan-400/40 rounded-tl-2xl"></div>

              {/* Image */}
              <div className="relative w-72 h-[390px] sm:w-80 sm:h-[430px] rounded-[2rem] overflow-hidden">

              <img
  src="/img1.jpeg"
  alt="Qamar Shehzadi"
  className="w-full h-full object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/40 to-transparent"></div>

              </div>

              {/* Decorative line */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b border-r border-cyan-400/40 rounded-br-2xl"></div>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <div className="flex items-center gap-4 mb-7">

              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em]">
                About Me
              </span>

              <span className="w-12 h-px bg-cyan-400/40"></span>

            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              A developer who enjoys
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                creating for the web.
              </span>
            </h2>

            <p className="mt-7 text-slate-400 leading-8 max-w-xl">
              I'm Qamar Shehzadi, a frontend developer passionate
              about creating clean, responsive and engaging digital
              experiences.
            </p>

            <p className="mt-4 text-slate-500 leading-8 max-w-xl">
              I enjoy turning ideas into modern interfaces using
              React and other frontend technologies, while keeping
              every experience simple and intuitive.
            </p>

            {/* Simple bottom line */}
            <div className="mt-9 flex items-center gap-5">

              <span className="text-sm text-slate-500">
                React
              </span>

              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>

              <span className="text-sm text-slate-500">
                TypeScript
              </span>

              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>

              <span className="text-sm text-slate-500">
                Tailwind CSS
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About