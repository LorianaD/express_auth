// outils des token -> jwt
import jwt from 'jsonwebtoken';
// var d'envirennement via notre fichier de config
import {env} from '../config/env.js';
// outil de connexion
import { pool } from '../db/index.js'

export async function authenticate(req, res) {
    try {
        // récupérer le token
        const authorization = req.header.authorization;
        const token = authorization.replace('BEARER', '');
        // gere le cas ou pas de token
        if (!token) {
            return res.status(401).json({
                error: 'token non trouve'
            })
        }
        // vérification du token avec verify
        const payload = jwt.verify(token, env.jwtSecret);
        // recuperer le user
        const [ rows ] = await pool.execute('SELECT id, email, created_at FROM users WHERE id = ?', [payload.sub]);
        if (!rows[0]) {
            return res.status(401).json({
                error: 'user inexistant'
            });
        }
        // ???
        req.user = rows[0];
        next();
    } catch (error) {
        error.status=401;
        next(error);
    }
}