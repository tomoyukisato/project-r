import React, { useState } from 'react';
import { Project } from "../../../features/models/Project";
import ProjectCard from "../projects/ProjectCard"
import ProjectForm from "../projects/ProjectForm"

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

function ProjectList({projects, onSave}: ProjectListProps){
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        //  console.log(project);
         setProjectBeingEdited(project);
    };
    const cancelEditEditing = () => {
        setProjectBeingEdited({});
    }
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            
            {project === projectBeingEdited ? (
                <ProjectForm 
                project={project}
                onSave={onSave}
                onCancel={cancelEditEditing}/>
            ): 
                <ProjectCard 
                    project={project} 
                    onEdit={handleEdit}
                />
            }
        </div>
      ));
    return <div className="row">{items}</div>;
}
export default ProjectList;