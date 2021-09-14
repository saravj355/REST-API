import bodyParser from 'body-parser';
import express from 'express';
import {
	config
} from './config/index.js';
import usersRoutes from './routes/users.js';

const app = express();

app.get('/', (req, res) => res.send('Hello'));
app.use('/users', usersRoutes);

app.use(bodyParser.json());
app.listen(config.port, () => console.log(`server on port http://localhost:${config.port}`))