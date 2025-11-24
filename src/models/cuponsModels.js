import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarTodos = async (filtros) => {
    return await prisma.cUPONS.findMany({
        where: filtros,
        include: { LOJA: true}
    });
};