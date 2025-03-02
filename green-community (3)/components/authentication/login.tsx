import {useEffect, useState} from "react";

interface EnvironmentalProject {
    id: string;
    name: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    category: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<EnvironmentalProject[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const token = localStorage.getItem("jwt_token");
                const res = await fetch("http://localhost:8080/api/projects", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) {
                    setError("Failed to fetch projects");
                    return;
                }
                const data = await res.json();
                setProjects(data);
            } catch (err) {
                setError("An unexpected error occurred");
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Environmental Projects</h1>
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className="mb-4">
                        <h2 className="text-xl">{project.name}</h2>
                        <p>{project.description}</p>
                        <p>
                            <strong>Location:</strong> {project.location}
                        </p>
                        <p>
                            <strong>Category:</strong> {project.category}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
