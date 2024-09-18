import Equipo from "./equipos";
import Mantenimiento from "./mantenimiento";
import Organizacion from "./organizaciones";
import Usuario from "./usuarios";

export const asociaciones = () => {
    // Relacion 1 a N entre usuario y mantenimiento
    Usuario.hasMany(Mantenimiento, { foreignKey: 'usuarioId' });
    Mantenimiento.belongsTo(Usuario, { foreignKey: 'usuarioId' });

    // Relacion 1 a N entre organizacion y equipo
    Organizacion.hasMany(Equipo, { foreignKey: 'organizacionId' });
    Equipo.belongsTo(Organizacion, { foreignKey: 'organizacionId' });

    // Relacion 1 a N entre equipo y mantenimiento
    Equipo.hasMany(Mantenimiento, { foreignKey: 'equipoId' });
    Mantenimiento.belongsTo(Equipo, { foreignKey: 'equipoId' });
}