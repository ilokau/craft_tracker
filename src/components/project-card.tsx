
type ProjectCardProps = {
    id: number
    name: string
    description: string
    currentStep: string
    imageUrl?: string
}

export default function ProjectCard({ name, description, currentStep, imageUrl }: ProjectCardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      {imageUrl ? (
        <figure>
          <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
        </figure>
      ) : (
        <div className="flex h-48 items-center justify-center bg-base-200 text-base-content/50">
          No image
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-sm font-medium text-secondary">{currentStep}</p>
      </div>
    </div>
  )
}