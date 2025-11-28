import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db/index.js';
import { env } from '../config/env.js';

export async function register({email, password, birth_date, birth_city}) {
    // validation basique (si les champs sont présent)
    if(!email || !password || !birth_date || !birth_city) {
       const error = new Error('email, mdp, date, et ville obligatoire');
       error.status = 400;
       throw error;
    }
    //hash du mdp
    const hash = await bcrypt.hash(password, 10); 
    //enregistrer l'utilisateur dans la db
    const query = `INSERT INTO users (email, password_hash, birth_date, birth_city) VALUES (?,?,?,?)`;
    const [result] = await pool.execute(query, [email, hash, birth_date, birth_city]);

    return {
        id: result.insertId,
        email,
        birth_date,
        birth_city,
        created_at: new Date()
    }
}