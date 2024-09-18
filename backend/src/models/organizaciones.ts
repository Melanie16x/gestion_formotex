import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Organizacion extends Model {
    public idOrganizacion!: number;
    public nombreOrganizacion!: string;
    public direccion!: string;
}

Organizacion.init({
    idOrganizacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreOrganizacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'organizacion',
});

export default Organizacion;