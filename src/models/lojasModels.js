import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient ();

export const listarTodos = async () => {
    return await prisma.lOJA.findMany({
        orderBy: {NOME_FANTASIA: 'asc'}
    });
};