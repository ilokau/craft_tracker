
export default function ProjectCard() {
    return (
        <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Project Name</h2>
                <p>Project description goes here. It can be a brief summary of the project.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-soft btn-secondary">View Details</button>
                </div>
            </div>
        </div>
    )
}