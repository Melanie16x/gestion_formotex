import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Mantenimiento extends Model {
    public idMantenimiento!: number;
    public fechaIngreso!: Date;
    public descripcion!: string;
    public usuarioId!: number;
    public equipoId!: number;
}

Mantenimiento.init({
    idMantenimiento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    equipoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'mantenimiento',
});

export default Mantenimiento;