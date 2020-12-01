import React from 'react';
import ProjectsService from '../utils/api';
import { withRouter } from 'react-router-dom';

class EditProject extends React.Component {
  state = {
      title: '',
      description: '',
      id: ''
  }

  // Add a component lifecycle method: get the id of the project that comes from the url.
  // create an instance of project service and set the state with the project details.
  componentDidMount() {
    const projectsService = new ProjectsService();
    const projectId = this.props.match.params.id;
    projectsService.getProject(projectId)
        .then((response) => {
          this.setState({
            title: response.data.title,
            description: response.data.description,
            id: response.data._id
          })
        });
}

  handleChange = (event) => {
      let { name, value } = event.target;

      this.setState({
          [name]: value
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const projectsService = new ProjectsService();
    /*let newProject = {
        id: this.props.match.params.id,
        name: this.state.name,
        description: this.state.description

        When using this approach, we'll have to use updatedProject(newProject)
    }*/
    projectsService.updateProject(this.state).then(() => {
        this.props.history.push(`/projects/${this.state.id}`)
    })

  }
  

  render() {
      return(
          <form onSubmit={this.handleFormSubmit}>
              <label>Title:</label>
              <input type="text" name="title" onChange={this.handleChange}  value={this.state.title}/>

              <label>Description:</label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>

              <button>Save</button>
          </form>
      ) 
  }
}

export default withRouter(EditProject);