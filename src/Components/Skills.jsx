
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "95%",
      description: "Semantic & accessible web structure",
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },
    {
      name: "CSS",
      level: "90%",
      description: "Styling & responsive layouts",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },
    {
      name: "Bootstrap",
      level: "90%",
      description: "Fast responsive UI development",
      icon: <FaBootstrap />,
      color: "text-purple-500",
    },
    {
      name: "JavaScript",
      level: "85%",
      description: "Interactive web experiences",
      icon: <FaJs />,
      color: "text-yellow-400",
    },
    {
      name: "React",
      level: "85%",
      description: "Reusable components & UI",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      name: "TypeScript",
      level: "75%",
      description: "Type-safe application development",
      icon: <SiTypescript />,
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      level: "75%",
      description: "Modern React applications",
      icon: <SiNextdotjs />,
      color: "text-white",
    },
    {
      name: "Tailwind CSS",
      level: "90%",
      description: "Utility-first styling & design",
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#070b14] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            MY SKILLS
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I{" "}
            <span className="text-cyan-400">Know.</span>
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Tools and technologies I use to build modern websites.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className={`text-2xl ${skill.color}`}>
                  {skill.icon}
                </span>

                <span className="text-xs text-cyan-400">
                  {skill.level}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                {skill.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
