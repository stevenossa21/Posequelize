import express, { json } from 'express';

import morgan from 'morgan';
const app = express();

//Importing routes
import projectRoutes from "./routes/projects"
import taskRoutes from "./routes/tasks"

//midlewares

app.use(morgan('dev'));
app.use(json());

//Routes

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;