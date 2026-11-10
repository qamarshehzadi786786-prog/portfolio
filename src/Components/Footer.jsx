function Footer() {
return ( <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-[#050914] text-white">


  {/* Background Glow */}
  <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
  <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

    {/* Main Footer */}
    <div className="grid gap-14 py-16 md:grid-cols-2 md:items-center lg:py-20">

      {/* Left Content */}
      <div>
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-300">
            QS
          </span>
          <span className="text-lg font-semibold tracking-wide">
            Qamar<span className="text-cyan-400">.</span>
          </span>
        </a>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Frontend Developer
        </p>

        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Turning ideas into
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            digital experiences.
          </span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
          I build modern, responsive and user-friendly websites with React
          and Tailwind CSS.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#050914] transition duration-300 hover:bg-white hover:shadow-lg hover:shadow-cyan-400/20"
        >
          Let's Connect
          <span className="text-lg">↗</span>
        </a>
      </div>

      {/* Right Content */}
      <div className="grid grid-cols-2 gap-10 md:justify-self-end md:gap-16">

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h3>

          <nav className="flex flex-col gap-4">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="w-fit text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
            Follow Me
          </h3>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                in
              </span>
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/qamarshehzadi786786-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                GH
              </span>
              GitHub ↗
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                @
              </span>
              Email Me ↗
            </a>

            <a
href="https://wa.me/923227847258"
target="_blank"
rel="noopener noreferrer"
className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-green-400"

>

  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-semibold transition group-hover:border-green-400/40 group-hover:bg-green-400/10">
    WA
  </span>

<span className="flex-1">WhatsApp</span>

<span>↗</span> </a>

          </div>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-center text-xs text-slate-500 sm:text-left">
        © {new Date().getFullYear()} Qamar Shehzadi. All rights reserved.
      </p>

      <a
        href="#home"
        className="group flex items-center justify-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
      >
        Back to top
        <span className="transition group-hover:-translate-y-1">↑</span>
      </a>

      <p className="text-center text-xs text-slate-500 sm:text-right">
        Crafted with <span className="text-cyan-400">♥</span> using React & Tailwind CSS
      </p>

    </div>
  </div>
</footer>


);
}

export default Footer
