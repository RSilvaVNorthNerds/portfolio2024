import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
    name: String,
    yearsOfExperience: Number,
    logo: String
});

const Skills = mongoose.model('skills', skillsSchema, 'skills');

export default Skills;