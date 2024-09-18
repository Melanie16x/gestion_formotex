import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { conectar } from '../db/connection';
import UsuarioRoutes from '../routes/usuarios.routes';
import OrganizacionRoutes from '../routes/organizaciones.routes';
import MantenimientoRoutes from '../routes/mantenimiento.routes';
import EquipoRoutes from '../routes/equipos.routes';
import AuthRoutes from '../routes/auth.routes'

class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 4000;

        this.conectarDB();

        this.middlewares();
        this.routes();
    }

    private conectarDB(): Promise<void> {
        return conectar();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api', UsuarioRoutes)
        this.app.use('/api', OrganizacionRoutes)
        this.app.use('/api', MantenimientoRoutes)
        this.app.use('/api', EquipoRoutes)
        this.app.use('/api/auth', AuthRoutes)
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en http://localhost:${this.port}`)
        });
    }

}

export default Server;