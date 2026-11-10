
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const cursorRef = useRef(null);

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Custom glowing cursor
  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="text-2xl font-bold text-white"
          >
            Qamar<span className="text-cyan-400">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative py-2 text-sm transition-colors duration-300
                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {link.name}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 text-sm font-semibold hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="custom-glow-cursor"
        aria-hidden="true"
      >
        <span></span>
      </div>
    </>
  );
}

export default Navbar;
