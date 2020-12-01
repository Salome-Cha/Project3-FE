import axios from 'axios'

// This file will have all the method to signup, login, and so on.
class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECTS_API}/api`
        });
        this.service = service;
    }

    signup =  (username, password) => {
        return this.service.post('/signup', {username, password})
    }
}

export default AuthService;