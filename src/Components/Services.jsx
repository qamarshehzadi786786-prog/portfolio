
import {
  FaCode,
  FaReact,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building modern websites with clean, reusable and maintainable code.",
      icon: <FaCode />,
    },
    {
      number: "02",
      title: "React Development",
      description:
        "Creating interactive applications with React and reusable components.",
      icon: <FaReact />,
    },
    {
      number: "03",
      title: "Responsive Design",
      description:
        "Designing websites that work smoothly on mobile, tablet and desktop.",
      icon: <FaMobileAlt />,
    },
    {
      number: "04",
      title: "UI Implementation",
      description:
        "Turning design ideas into polished interfaces using modern CSS tools.",
      icon: <FaPalette />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#070b14] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            WHAT I DO
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My{" "}
            <span className="text-cyan-400">Services.</span>
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
            I create modern, responsive and user-friendly web experiences
            using frontend technologies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-2xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </span>

                <span className="text-xs font-medium text-slate-600">
                  {service.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-cyan-400">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
              >
                Let's talk
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
