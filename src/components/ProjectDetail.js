import React from 'react';
import ProjectsService from '../utils/api';
import {withRouter} from 'react-router-dom'

class ProjectDetail extends React.Component {
    state = {
        title: '',
        description: '',
        id: '',
    }

    componentDidMount() {
        const projectsService = new ProjectsService();
        const id = this.props.match.params.id;
        projectsService.getProject(id)
            .then((response) => {
              this.setState({
                id: response.data._id,
                title: response.data.title,
                description: response.data.description
              })
            });
    }

    handleProjectDelete = (id) => {
     // instanciate a new ProjectService
     // call the deleteProject function
     // redirect the user to project list.
     const projectsService = new ProjectsService();
     projectsService.deleteProject(id).then(() => {
            this.props.history.push('/projects');
        });
    }

    render() {
        return(
            <div>
                <h2>{this.state.title}</h2>
                <h3>description: {this.state.description}</h3>
                <div>
                {/* every time we pass this, it will be called and executed. So we have to do what is below. onClick="{this.handleDeleteProject(this.state.id)}" */}
                <button onClick={() => this.handleProjectDelete(this.state.id)}>Delete Project</button>
                </div>

                <div>
                {/* We don't need to create a function, we can redirect directly to the edit component.*/}
                <button onClick={() => this.props.history.push(`/projects/${this.state.id}/edit`)}>Edit Project</button>
                </div>
            </div>

            // create a button that calls a handleDeleteProject function
            // Pass the id of the current project as an argument.
        )
    }
}

export default withRouter(ProjectDetail);
