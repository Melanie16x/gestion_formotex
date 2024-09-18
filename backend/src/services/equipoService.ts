import { Model, Optional } from 'sequelize';
import Equipo from '../models/equipos';

interface IEquipo {
    idEquipo?: number;
    nombreEquipo: string;
    estado: string;
    fechaAdquisicion: Date;
    ubicacion: string;
    organizacionId: number;
}

// Definir que todos los atributos de equipo son necesarios, omitiendo idEquipo
interface IEquipoAtributos extends Optional<IEquipo, 'idEquipo'> {}

class EquipoService {
    async createEquipo(equipo: IEquipoAtributos): Promise<Model<IEquipo>> {
        return await Equipo.create(equipo)
    }

    async getEquipoById(idEquipo: number): Promise<Model<IEquipo> | null> {
        return await Equipo.findByPk(idEquipo)
    }

    async getAllEquipo(): Promise<Model<IEquipo>[]> {
        return await Equipo.findAll();
    }

    async updateEquipo(idEquipo: number, datosActualizados: Partial<IEquipo>): Promise<[number, Model<IEquipo>[]]> {
        return await Equipo.update(datosActualizados, {
            where: { idEquipo },
            returning: true
        });
    }

    async deleteEquipo(idEquipo: number): Promise<number> {
        return await Equipo.destroy({
            where: { idEquipo }
        });
    }
}

export default new EquipoService();
