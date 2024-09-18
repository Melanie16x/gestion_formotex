import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config';

interface JWTPayload {
    idUsuario: number;
    nombreUsuario: string;
    rol: string;
}

export const createJWT = async (payload: JWTPayload): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET_KEY, (err: Error | null , token: string | undefined) => {
            if (err) {
                reject('Error al firmar el token')
                return;
            } 

            if (token) {
                resolve({ token })
            } else {
                reject('Error al generar el token')
            }
        })
    })
}