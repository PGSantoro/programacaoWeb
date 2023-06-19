import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const prisma = new PrismaClient();

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await prisma.cadastro.create({
            data: {
                name,
                email,
                password,
            },
        });
        return res.json(newUser);
    } catch (err) {
        console.error("Error creating user:", err);
        return res.json("Error");
    }
});

app.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.cadastro.findUnique({
            where: {
                email,
                password,
            },
        });
        if (user) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    } catch (err) {
        console.error("Error finding user:", err);
        return res.json("Error");
    }
});

app.listen(8081, () => {
    console.log("Server listening on port 8081");
});
