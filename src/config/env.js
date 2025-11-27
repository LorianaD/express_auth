// j'importe dotenv
import dotenv from 'dotenv';

dotenv.config();

// lister et vérifier les infos nécésssaires pour demarrer l'app
const required = ['DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];
// console.log(required);

for (const key of required) {
    if (!process.env[key]) {
        throw new Error (`${key} : manquant dans le fichier .env`);
    }
}

export const env = {
    port: process.env.PORT ?? 3001,
    db: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASS ?? '',
        database: process.env.DB_NAME
    },
    jwtSecret: process.env.JWT_SECRET
}