import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
    githubUrl: String
});

const Project = mongoose.model('projects', projectsSchema, 'projects');

export default Project;