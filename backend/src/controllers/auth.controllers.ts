import { createJWT } from "../helpers/JWT";
import { createUser, getUserByNomUsuarioAndPassword, getUserById } from "../services/authService";
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { SECRET_KEY } from "../config/config";


export const ctrlRegisterUser = async (req: Request, res: Response) => {
    try {
        console.log('Request body:', req.body);
        const user = await createUser(req.body)

        const token = await createJWT({ idUsuario: user.idUsuario, nombreUsuario: user.nombreUsuario, rol: user.rol })

        res.status(200).json(token)
    } catch (error) {
        res.sendStatus(500)
    }
}

export const ctrlLoginUser = async (req: Request, res: Response) => {
    try {
        const user = await getUserByNomUsuarioAndPassword(req.body)

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = await createJWT({ idUsuario: user.idUsuario, nombreUsuario: user.nombreUsuario, rol: user.rol })

        res.status(200).json(token)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// validar si el token es válido.
export const ctrlGetUserInfoByToken = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.sendStatus(404)
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY as string) as { idUsuario: number };

        const user = await getUserById(decoded.idUsuario);

        if (!user) {
            return res.sendStatus(404);
        }

        res.status(200).json(user);
    } catch (error) {
        res.sendStatus(403);
    }
};