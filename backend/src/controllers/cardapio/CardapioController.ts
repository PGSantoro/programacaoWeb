import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CardapioController {
  async getAllPizzas(req: Request, res: Response) {
    try {
      const pizzas = await prisma.pizza.findMany();
      res.json(pizzas);
    } catch (error) {
      console.error("Error retrieving pizzas:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default CardapioController;
