import axios from 'axios';

class ProjectsService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_FINAL_PROJECT_API}/api`
        });
        this.service = service;
    }

    getAll() {
        //axios.get('http://localhost:5000/characters);
        return this.service.get('/projects');
    }

    getProject(id) {
        //axios.get('http://localhost:5000/characters/1);
        return this.service.get(`/projects/${id}`);
    }

    addProject(project) {
        //axios.post('http://localhost:5000/characters/, { name: 'miguel});
        return this.service.post('/projects', project);
    }

    // Create a delete project function. This works because we create a route on BE side where we can call delete.
    deleteProject(id) {
        return this.service.delete(`/projects/${id}`);
    }

    updateProject(updatedProject) {
        return this.service.put(`/projects/${updatedProject.id}`, updatedProject);
    }
}

export default ProjectsService;