
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#070b14] text-white overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[130px]"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 pt-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-cyan-400"></span>

              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-cyan-400">
                Frontend Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.7rem] font-bold leading-[1.05] tracking-tight">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                modern
              </span>
              <br />
              web experiences.
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-slate-400 leading-8">
              I'm{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Qamar Shehzadi
              </span>
              , a frontend developer focused on creating clean, responsive and
              engaging digital experiences with React and modern web
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-cyan-400 transition-all duration-300"
              >
                View Projects

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            {/* Bottom Info */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-xl font-bold">8+</p>
                <p className="text-xs text-slate-500 mt-1">Technologies</p>
              </div>

              <div className="w-px h-8 bg-white/10"></div>

              <div>
                <p className="text-xl font-bold">3+</p>
                <p className="text-xs text-slate-500 mt-1">Projects</p>
              </div>

              <div className="w-px h-8 bg-white/10"></div>

              <div>
                <p className="text-xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-slate-500 mt-1">Dedication</p>
              </div>
            </div>
          </div>

          {/* RIGHT CREATIVE VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[420px] sm:w-[430px] sm:h-[480px]">

              {/* Orbit 1 */}
              <div className="absolute inset-10 rounded-full border border-cyan-400/15 animate-[spin_18s_linear_infinite]">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></span>
              </div>

              {/* Orbit 2 */}
              <div className="absolute inset-20 rounded-full border border-blue-400/10 animate-[spin_12s_linear_infinite_reverse]">
                <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              </div>

              {/* Main Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-[70px]"></div>

              {/* Main Rotating Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 rounded-[35%] rotate-45 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent border border-cyan-400/20 backdrop-blur-xl animate-[spin_20s_linear_infinite]"></div>

              {/* Inner Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#0b111d] border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.12)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-cyan-400 mb-3">
                    {"</>"}
                  </div>

                  <p className="text-sm font-semibold text-white">
                    Creative
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Web Developer
                  </p>
                </div>
              </div>

              {/* HTML */}
              <div className="absolute top-8 left-2 sm:left-8 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-orange-400/20 text-orange-400 text-sm font-mono shadow-xl animate-[bounce_4s_ease-in-out_infinite]">
                HTML5
              </div>

              {/* CSS */}
              <div className="absolute top-2 right-10 sm:right-16 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-blue-400/20 text-blue-400 text-sm font-bold shadow-xl animate-[bounce_4.5s_ease-in-out_infinite]">
                CSS3
              </div>

              {/* JavaScript */}
              <div className="absolute bottom-16 left-0 sm:left-4 w-12 h-12 rounded-2xl bg-[#0b111d]/90 border border-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold shadow-xl animate-[bounce_4.5s_ease-in-out_infinite]">
                JS
              </div>

              {/* React */}
              <div className="absolute top-24 right-0 sm:right-2 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-cyan-400/20 text-cyan-400 text-sm font-bold shadow-xl animate-[bounce_5s_ease-in-out_infinite]">
                React
              </div>

              {/* Tailwind CSS */}
              <div className="absolute bottom-28 right-0 sm:right-2 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-teal-400/20 text-teal-400 text-sm font-bold shadow-xl animate-[bounce_4s_ease-in-out_infinite]">
                Tailwind
              </div>

              {/* TypeScript */}
              <div className="absolute top-1/2 -left-1 sm:left-0 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-blue-500/20 text-blue-400 text-sm font-bold shadow-xl animate-[bounce_5s_ease-in-out_infinite]">
                TS
              </div>

              {/* Next.js */}
              <div className="absolute bottom-2 left-10 sm:left-16 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-white/20 text-white text-sm font-bold shadow-xl animate-[bounce_4.5s_ease-in-out_infinite]">
                Next.js
              </div>

              {/* Bootstrap */}
              <div className="absolute top-28 left-0 sm:left-2 px-3 py-2.5 rounded-xl bg-[#0b111d]/90 border border-purple-400/20 text-purple-400 text-sm font-bold shadow-xl animate-[bounce_5.5s_ease-in-out_infinite]">
                Bootstrap
              </div>

              {/* Available for Work */}
              <div className="absolute bottom-0 right-0 sm:right-8 px-3 sm:px-4 py-2.5 rounded-full bg-[#0b111d]/90 border border-white/10 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                  <span className="text-xs text-slate-400">
                    Available for work
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
