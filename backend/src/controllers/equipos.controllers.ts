import { Request, Response } from "express";
import EquipoService from "../services/equipoService";

export const createEquipo = async (req: Request, res: Response) => {
    try {
        const equipo = await EquipoService.createEquipo(req.body);
        res.status(201).json(equipo);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const updateEquipo = async (req: Request, res: Response) => {
    const { idEquipo } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(Number(idEquipo))) {
            return res.status(400).json({ error: "ID de equipo inválido" });
        }

        const [numUpdated, [equipoActualizado]] = await EquipoService.updateEquipo(Number(idEquipo), datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }

        res.status(200).json(equipoActualizado);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getEquipoById = async (req: Request, res: Response) => {
    const { idEquipo } = req.params;

    try {
        if (isNaN(Number(idEquipo))) {
            return res.status(400).json({ error: "ID de equipo inválido" });
        }

        const equipo = await EquipoService.getEquipoById(Number(idEquipo));

        if (!equipo) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }

        res.status(200).json(equipo);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllEquipos = async (_req: Request, res: Response) => {
    try {
        const equipos = await EquipoService.getAllEquipo();
        res.status(200).json(equipos);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteEquipo = async (req: Request, res: Response) => {
    const { idEquipo } = req.params;

    try {
        if (isNaN(Number(idEquipo))) {
            return res.status(400).json({ error: "ID de equipo inválido" });
        }

        const equipoEliminado = await EquipoService.deleteEquipo(Number(idEquipo));

        if (equipoEliminado === 0) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }

        res.status(200).json({ message: "Equipo eliminado correctamente" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
