import Server from './models/server';
import { syncDatabase } from './models/sync';
import dotenv from 'dotenv';

dotenv.config();

syncDatabase();

const server = new Server();

server.listen()