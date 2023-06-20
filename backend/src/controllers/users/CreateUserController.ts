import { Request, response, Response } from "express";
class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nmUser, senha, perfil } = req.body
        return res.json({ OK: true })
    }
}
export { CreateUserController }