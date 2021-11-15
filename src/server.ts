import './dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';
import config from './config/server'



const app = express();
const port = config.server.port;

app.use(cors());
app.use(express.json());
app.use(routes);

/* Teste */
app.listen(port, () => console.log('Server started'));