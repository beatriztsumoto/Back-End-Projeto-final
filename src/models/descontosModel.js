import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const listarTodos = async () => {
    return await prisma.dESCONTOS.findMany({
        include: { LOJA: true}
    });
};