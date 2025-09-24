// src/app/projects/page.js
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TODO 리스트 앱",
      description: "Next.js로 만든 첫 번째 프로젝트",
      tech: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "포트폴리오 웹사이트",
      description: "나만의 포트폴리오 사이트",
      tech: ["Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">프로젝트</h1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/projects/${project.id}`}>
              <h2 className="text-2xl font-semibold mb-3 text-blue-600 hover:underline">
                {project.title}
              </h2>
            </Link>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
