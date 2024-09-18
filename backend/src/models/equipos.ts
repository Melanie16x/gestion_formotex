import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Equipo extends Model {
    public idEquipo!: number;
    public nombreEquipo!: string;
    public estado!: string;
    public fechaAdquisicion!: Date;
    public ubicacion!: string;
    public organizacionId!: number;
}

Equipo.init({
    idEquipo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreEquipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaAdquisicion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    organizacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'equipo',
});

export default Equipo;