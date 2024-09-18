import { Model, Optional } from 'sequelize';
import Mantenimiento from '../models/mantenimiento';

interface IMantenimiento {
    idMantenimiento?: number;
    fechaIngreso: Date;
    descripcion: string;
    usuarioId: number;
    equipoId: number;
}

// Definir que todos los atributos de mantenimiento son necesarios, omitiendo idMantenimiento
interface IMantenimientoAtributos extends Optional<IMantenimiento, 'idMantenimiento'> {}

class MantenimientoService {
    async createMantenimiento(mantenimiento: IMantenimientoAtributos): Promise<Model<IMantenimiento>> {
        return await Mantenimiento.create(mantenimiento)
    }

    async getMantenimientoById(idMantenimiento: number): Promise<Model<IMantenimiento> | null> {
        return await Mantenimiento.findByPk(idMantenimiento)
    }

    async getAllMantenimiento(): Promise<Model<IMantenimiento>[]> {
        return await Mantenimiento.findAll();
    }

    async updateMantenimiento(idMantenimiento: number, datosActualizados: Partial<IMantenimiento>): Promise<[number, Model<IMantenimiento>[]]> {
        return await Mantenimiento.update(datosActualizados, {
            where: { idMantenimiento },
            returning: true
        });
    }

    async deleteMantenimiento(idMantenimiento: number): Promise<number> {
        return await Mantenimiento.destroy({
            where: { idMantenimiento }
        });
    }
}

export default new MantenimientoService();
