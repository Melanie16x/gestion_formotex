import { Request, Response } from "express";
import OrganizacionService from "../services/organizacionService";

export const createOrganizacion = async (req: Request, res: Response) => {
    try {
        const organizacion = await OrganizacionService.createOrganizacion(req.body);
        res.status(201).json(organizacion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const updateOrganizacion = async (req: Request, res: Response) => {
    const { idOrganizacion } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(Number(idOrganizacion))) {
            return res.status(400).json({ error: "ID de organización inválido" });
        }

        const [numUpdated, [organizacionActualizada]] = await OrganizacionService.updateOrganizacion(Number(idOrganizacion), datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "Organización no encontrada" });
        }

        res.status(200).json(organizacionActualizada);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getOrganizacionById = async (req: Request, res: Response) => {
    const { idOrganizacion } = req.params;

    try {
        if (isNaN(Number(idOrganizacion))) {
            return res.status(400).json({ error: "ID de organización inválido" });
        }

        const organizacion = await OrganizacionService.getOrganizacionById(Number(idOrganizacion));

        if (!organizacion) {
            return res.status(404).json({ error: "Organización no encontrada" });
        }

        res.status(200).json(organizacion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllOrganizaciones = async (_req: Request, res: Response) => {
    try {
        const organizaciones = await OrganizacionService.getAllOrganizacion();
        res.status(200).json(organizaciones);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteOrganizacion = async (req: Request, res: Response) => {
    const { idOrganizacion } = req.params;

    try {
        if (isNaN(Number(idOrganizacion))) {
            return res.status(400).json({ error: "ID de organización inválido" });
        }

        const organizacionEliminada = await OrganizacionService.deleteOrganizacion(Number(idOrganizacion));

        if (organizacionEliminada === 0) {
            return res.status(404).json({ error: "Organización no encontrada" });
        }

        res.status(200).json({ message: "Organización eliminada correctamente" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
