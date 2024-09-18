import { Model, Optional } from 'sequelize';
import Organizacion from '../models/organizaciones';

interface IOrganizacion {
    idOrganizacion?: number;
    nombreOrganizacion: string;
    direccion: string;
}

// Definir que todos los atributos de organizacion son necesarios, omitiendo idOrganizacion
interface IOrganizacionAtributos extends Optional<IOrganizacion, 'idOrganizacion'> {}

class OrganizacionService {
    async createOrganizacion(organizacion: IOrganizacionAtributos): Promise<Model<IOrganizacion>> {
        return await Organizacion.create(organizacion)
    }

    async getOrganizacionById(idOrganizacion: number): Promise<Model<IOrganizacion> | null> {
        return await Organizacion.findByPk(idOrganizacion)
    }

    async getAllOrganizacion(): Promise<Model<IOrganizacion>[]> {
        return await Organizacion.findAll();
    }

    async updateOrganizacion(idOrganizacion: number, datosActualizados: Partial<IOrganizacion>): Promise<[number, Model<IOrganizacion>[]]> {
        return await Organizacion.update(datosActualizados, {
            where: { idOrganizacion },
            returning: true
        });
    }

    async deleteOrganizacion(idOrganizacion: number): Promise<number> {
        return await Organizacion.destroy({
            where: { idOrganizacion }
        });
    }
}

export default new OrganizacionService();
