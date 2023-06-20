import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';
import { CardapioController } from './controllers/cardapio/CardapioController';



const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ ok: true })
})
// Login e Cadastro
router.post('/singup', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
//Cardapio
router.get('/pizzas', new CardapioController().handle);

export { router };