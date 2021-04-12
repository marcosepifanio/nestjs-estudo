import { Connection, Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity'

export const usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'USUARIO_REPOSITORY2',
        useFactory: (connection: Connection) => connection.getRepository(Usuario),
        inject: ['DATABASE_CONNECTION2'],
    },
];