import lengthImage from "../assets/imge.png";
function Projects() {
  
  const projects = [
    {
      number: "01",
      title: "Coffee Shop",
      category: "Featured Project",
      description:
        "A modern coffee shop website designed to make exploring the menu and ordering your favorite coffee simple and enjoyable. Built with a clean interface, smooth navigation, and a responsive layout.",
      image: "/image.png",
      imagePosition: "left",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://coffee-project-h6uz.vercel.app/",
      githubLink:
        "https://github.com/qamarshehzadi786786-prog/coffee-project",
    },
    {
      number: "02",
      title: "Electrician & Cooling",
      category: "Featured Project",
      description:
        "A modern electrician and cooling services website designed to showcase electrical and air conditioning services. Built with a professional interface, responsive layouts, and smooth navigation.",
      image: "/src/assets/img.png",
      imagePosition: "right",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
       liveLink: "https://electrician-website-rose.vercel.app/",
      githubLink: "https://github.com/qamarshehzadi786786-prog/electrician-website",
     
    },

{
  number: "03",
  title: "Length Converter",
  category: "Featured Project",
  description:
    "A simple and user-friendly length converter that allows users to convert measurements between different units quickly and accurately.",
  image: lengthImage,
  imagePosition: "left",
  technologies: ["HTML", "CSS", "JavaScript"],
 liveLink: "https://length-converter-six.vercel.app/",
githubLink: "https://github.com/qamarshehzadi786786-prog/length-converter",
},
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] px-5 py-24 text-white sm:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            My Portfolio
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Selected{" "}
              <span className="text-cyan-400">Projects.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              A showcase of my learning, creativity, and passion for building
              modern web experiences.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c1320] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
            >
              <div className="grid lg:grid-cols-[1fr_1fr]">

                {/* Project Details */}
                <div
                  className={`flex flex-col justify-center px-6 pb-8 pt-8 sm:px-8 sm:pb-9 lg:px-9 lg:py-10 ${
                    project.imagePosition === "right"
                      ? "order-1"
                      : "order-2"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold text-cyan-400">
                      {project.number}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                    <span className="text-cyan-400">.</span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  {(project.liveLink || project.githubLink) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#07111d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                        >
                          Live Project ↗
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Image */}
                <div
                  className={`relative p-4 sm:p-6 lg:p-7 ${
                    project.imagePosition === "right"
                      ? "order-2"
                      : "order-1"
                  }`}
                >
                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#101827] p-3 sm:min-h-[360px] sm:p-5">
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                   className="h-[420px] w-full rounded-xl object-contain object-center"
                    />
                  </div>

                  <div className="absolute right-3 top-3 h-12 w-12 rounded-tr-2xl border-r border-t border-cyan-400/40 sm:right-4 sm:top-4" />
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          More projects coming soon.
        </div>

      </div>
    </section>
  );
}

export default Projects;
