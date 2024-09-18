import { Request, Response } from "express";
import MantenimientoService from "../services/mantenimientoService";

export const createMantenimiento = async (req: Request, res: Response) => {
    try {
        const mantenimiento = await MantenimientoService.createMantenimiento(req.body);
        res.status(201).json(mantenimiento);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const updateMantenimiento = async (req: Request, res: Response) => {
    const { idMantenimiento } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(Number(idMantenimiento))) {
            return res.status(400).json({ error: "ID de mantenimiento inválido" });
        }

        const [numUpdated, [mantenimientoActualizado]] = await MantenimientoService.updateMantenimiento(Number(idMantenimiento), datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "Mantenimiento no encontrado" });
        }

        res.status(200).json(mantenimientoActualizado);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getMantenimientoById = async (req: Request, res: Response) => {
    const { idMantenimiento } = req.params;

    try {
        if (isNaN(Number(idMantenimiento))) {
            return res.status(400).json({ error: "ID de mantenimiento inválido" });
        }

        const mantenimiento = await MantenimientoService.getMantenimientoById(Number(idMantenimiento));

        if (!mantenimiento) {
            return res.status(404).json({ error: "Mantenimiento no encontrado" });
        }

        res.status(200).json(mantenimiento);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllMantenimientos = async (_req: Request, res: Response) => {
    try {
        const mantenimientos = await MantenimientoService.getAllMantenimiento();
        res.status(200).json(mantenimientos);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteMantenimiento = async (req: Request, res: Response) => {
    const { idMantenimiento } = req.params;

    try {
        if (isNaN(Number(idMantenimiento))) {
            return res.status(400).json({ error: "ID de mantenimiento inválido" });
        }

        const mantenimientoEliminado = await MantenimientoService.deleteMantenimiento(Number(idMantenimiento));

        if (mantenimientoEliminado === 0) {
            return res.status(404).json({ error: "Mantenimiento no encontrado" });
        }

        res.status(200).json({ message: "Mantenimiento eliminado correctamente" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
