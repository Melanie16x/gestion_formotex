import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Usuario extends Model {
    public idUsuario!: number;
    public nombreUsuario!: string;
    public contraseña!: string;
    public rol!: string;
}

const roles = {
    ADMIN: "admin",
    TECNICO: "tecnico"
}

Usuario.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM(roles.ADMIN, roles.TECNICO),
        defaultValue: roles.ADMIN
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'usuario',
});


export default Usuario;