import express from 'express';
import cors from 'cors';
import routes from './api/routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', routes);

export default app;