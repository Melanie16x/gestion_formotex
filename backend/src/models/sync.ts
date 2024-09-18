import sequelize from '../db/connection';
import { asociaciones } from './asociaciones';

export const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false, logging: console.log });
        console.log('Tablas sincronizadas correctamente');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
}