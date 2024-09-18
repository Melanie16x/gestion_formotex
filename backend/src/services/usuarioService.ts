import { Model, Optional } from 'sequelize';
import Usuario from '../models/usuarios';

interface IUsuario {
    idUsuario?: number;
    nombreUsuario: string;
    contraseña: string;
    rol: string;
}

// Definir que todos los atributos de usuario son necesarios, omitiendo idUsuario
interface IUsuarioAttributes extends Optional<IUsuario, 'idUsuario'> {}

class UsuarioService {
    async createUsuario(usuario: IUsuarioAttributes): Promise<Model<IUsuario>> {
        return await Usuario.create(usuario)
    }

    async getUsuarioById(idUsuario: number): Promise<Model<IUsuario> | null> {
        return await Usuario.findByPk(idUsuario)
    }

    async getAllUsuarios(): Promise<Model<IUsuario>[]> {
        return await Usuario.findAll();
    }

    async updateUsuario(idUsuario: number, datosActualizados: Partial<IUsuario>): Promise<[number, Model<IUsuario>[]]> {
        return await Usuario.update(datosActualizados, {
            where: { idUsuario },
            returning: true
        });
    }

    async deleteUsuario(idUsuario: number): Promise<number> {
        return await Usuario.destroy({
            where: { idUsuario }
        });
    }
}

export default new UsuarioService();
