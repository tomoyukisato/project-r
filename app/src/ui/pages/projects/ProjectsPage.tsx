import React, {Fragment, useEffect, useState} from 'react';
// import { MOCK_PROJECTS } from '../../../mock/Projects';
import ProjectList from '../projects/ProjectList'
import { Project } from '../../../features/models/Project';
import { projectAPI } from '../../../features/apis/projectAPI';

function ProjectPage(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreClick =() =>{
        setCurrentPage((currentPage)=> currentPage + 1);
    };
    useEffect(()=>{
        async function loadingProjects(){
            setLoading(true);
            try{
                const data = await projectAPI.get(currentPage);
                setError('');
                if(currentPage === 1){
                    console.log(data)
                    setProjects(data);
                }else{
                    setProjects((projects)=> [...projects, ...data])
                }
            }
            catch(e){
                if(e instanceof Error){
                    setError(e.message);
                }
            }finally{
               setLoading(false); 
            }
            }
            loadingProjects();
    }, [currentPage]);

    const saveProject = (project: Project) =>{
        let updatedProjects = projects.map((p: Project)=>{
            return p.id === project.id ? project: p;
        });
        setProjects(updatedProjects);
    }


    return (
        <Fragment>
            <h1>Projects</h1>
            {error && (
                <div className='card large error'>
                    <section>
                        <p>
                            <span className='icon-alert inverse'></span>
                            {error}
                        </p>
                    </section>
                </div>
            )}
            {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
            <ProjectList 
            onSave={saveProject}
            projects={projects}/>
            {!loading && !error &&(
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='button-group fluid'>
                            <button className='button default'onClick={handleMoreClick}>
                                MORE...
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {loading && (
                <div className="center-page">
                <span className="spinner primary"></span>
                <p>Loading...</p>
                </div>
            )}
        </Fragment>
    );
}

export default ProjectPage;