import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PizzaService {
    async getAllPizzas() {
        try {
            const pizzas = await prisma.pizza.findMany();
            return pizzas;
        } catch (error) {
            console.error("Error retrieving pizzas:", error);
            throw new Error("Internal server error");
        }
    }
}

export default PizzaService;
