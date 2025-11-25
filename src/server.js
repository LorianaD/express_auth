import app from "./app.js";
import {env} from "./config/env.js";
import { testConnection } from "./db/index.js";
import { pool } from "./db/index.js";

async function start() {
    try {
        await testConnection(); // notre fonction qui verifie si la connexion est ok
        app.listen(env.port, ()=>{
            console.log(`serveur pret sur http://localhost:${env.port}`);
        })
    } catch (error) {
        console.error('lancement server impossible', error);
        process.exit(1);
    }
}

// if (import.meta.url === `file://${process.argv{1}}`) {
//     testConnection().then(()=>{
//         console.log('test terminé');
//         return pool.end();
//     })
//     .catch((error)=>{
//         console.error('test manuel echoué', error);
//         process.exit(1);
//     })
// }

start();