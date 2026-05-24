import { projects } from "../data/projects"
import ProjectCard from "./project-card"

export default function ProjectList() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Your Projects</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            currentStep={project.currentStep}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}