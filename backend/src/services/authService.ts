import Usuario from "../models/usuarios";
import { Hashing } from "../helpers/hash";
import bcryptjs from 'bcryptjs';

interface User {
    nombreUsuario: string;
    contraseña: string;
    rol: string;
}

const hashing = new Hashing();

export async function getAllUsers() {
  return (await Usuario.findAll()) ?? null;
}

export async function createUser(user: User) {
  const hashedPassword = await hashing.hashPassword(user.contraseña);

  return await Usuario.create({ ...user, contraseña: hashedPassword });
}

export async function getUserById(userId: number) {
  return (await Usuario.findByPk(userId)) ?? null;
}

export async function getUserByNomUsuarioAndPassword({ nombreUsuario, contraseña }: {nombreUsuario: string, contraseña: string}) {
  const user = await Usuario.findOne({ where: { nombreUsuario } });

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcryptjs.compare(contraseña, user.contraseña);

  if (!isPasswordValid) {
    return null;
  }

  return user;
}
