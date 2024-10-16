import express from 'express';
import Database from './db/database';
import Project from './db/schemas/projectsSchema';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const db = new Database();
const port = process.env.PORT || 3003;

try {
  db.connect();
} catch (error) {
  console.error('Could not connect to DB: ' + error);
}

app.use(cors())
app.use(express.json());

app.get('/all-projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.send(JSON.stringify(projects));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/contact-me', async (req, res) => {
  const {name} = req.body;

  try {
    res.send({message: `Thank You ${name}! Your request has been received!`});
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});