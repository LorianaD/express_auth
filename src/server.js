import app from "./app.js";
import { env } from "./config/env.js";
import { testConnection } from "./db/index.js";

async function start() {
        // notre fonction qui verifie si la  connexion est ok
        await testConnection();
        
        app.listen(env.port, ()=>{
            console.log(`serveur pret sur sur le port ${env.port}`);
        })
}

start();