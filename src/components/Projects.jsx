import { FiSettings } from "react-icons/fi";
import wip from "../assets/wip.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Digital Invitation",
      desc: "A responsive digital invitation website that presents event details, schedule, venue information, and RSVP functionality in a clean and user-friendly format.",
      tags: ["ReactJS", "TypeScript", "Tailwind CSS"],
      status: "In progress",
      codeUrl: "https://github.com/mrdcabauatan/carla-will-wedding-invitation",
      demoUrl: "https://carlawillwedding.netlify.app/",
    },
    {
      id: 2,
      title: "Finance Tracker",
      desc: "A lightweight mobile app for tracking expenses and visualizing personal financial insights in real time.",
      tags: ["Flutter", "Dart"],
      status: "Not started",
    },
    {
      id: 3,
      title: "Task Management",
      desc: "A productivity-focused platform for organizing tasks, tracking progress, and improving team workflow.",
      tags: ["VueJS", "TypeScript", "NodeJS"],
      status: "Not started",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative pt-24 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Projects
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Here are some projects I'm currently working on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #1f2937, #111827)"
                  : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]"
            >
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-[10px] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-5 mb-4 h-[4px] rounded-full"
                  style={{
                    backgroundColor: darkMode
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(17,24,39,0.18)",
                  }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        project.status === "Not started"
                          ? "#374151"
                          : "linear-gradient(to right, #f97316, #f59e0b)",

                      boxShadow:
                        project.status === "Not started"
                          ? "0 0 0 3px rgba(107,114,128,0.15)"
                          : "0 0 0 3px rgba(249,115,22,0.15)",
                    }}
                  >
                    <FiSettings className="text-white text-lg" />
                  </div>

                  <span
                    className="text-sm whitespace-nowrap"
                    style={{ color: darkMode ? "#e5e7eb" : "#374151" }}
                  >
                    {project.status}
                  </span>

                  {/* Action Buttons */}
                  {project.status !== "Not started" && (
                    <div className="flex items-center gap-3 ml-auto">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 text-sm rounded-md border transition
                          ${
                            darkMode
                              ? "border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                              : "border-gray-600 text-gray-700 hover:text-gray-100 hover:bg-gray-600"
                          }`}
                      >
                        Code
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 text-sm rounded-md border transition
                          ${
                            darkMode
                              ? "border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                              : "border-gray-600 text-gray-700 hover:text-gray-100 hover:bg-gray-600"
                          }`}
                      >
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-16 flex flex-col items-center text-center gap-4">
          <div
            className="w-full max-w-5xl h-px"
            style={{
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.25)"
                : "rgba(17,24,39,0.2)",
            }}
          />
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <div className="w-25 h-25 rounded-full flex items-center justify-center">
              <img
                src={wip}
                alt="In progress"
                className="object-contain animate-rotate-slow"
              />
            </div>
            <p
              className="text-sm sm:text-base max-w-xl"
              style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
            >
              <span>More projects coming soon.</span> I’m currently building and
              refining new features. Updates will be added here as they ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
