import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 4000,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres'
});

export const conectar = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada', process.env.DB_NAME);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
};

export default sequelize;