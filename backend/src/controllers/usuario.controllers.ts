import { Request, Response } from "express";
import UsuarioService from "../services/usuarioService";

export const CreateUsuario = async (req: Request, res: Response) => {
    try {
        const usuario = await UsuarioService.createUsuario(req.body)
        res.status(201).json(usuario)
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export const UpdateUsuario = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(Number(idUsuario))) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const [numUpdated, [usuarioActualizado]] = await UsuarioService.updateUsuario(Number(idUsuario), datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(usuarioActualizado);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const getUsuarioById = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;

    try {
        if (isNaN(Number(idUsuario))) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const usuario = await UsuarioService.getUsuarioById(Number(idUsuario));

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const getAllUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await UsuarioService.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;

    try {
        if (isNaN(Number(idUsuario))) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const usuarioEliminado = await UsuarioService.deleteUsuario(Number(idUsuario));

        if (!usuarioEliminado) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
