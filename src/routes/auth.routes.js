// import de notre outil qui gére les routes
import { Router } from 'express';
import {
    loginController, 
    profileController,
    registerController
} from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

// route pour s'enregistrer
router.post('/register', registerController);
// route pour se login
router.post('/login', loginController);
// afficher son profil
router.get('/profile', authenticate, profileController)

export default router;