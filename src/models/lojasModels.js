import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarTodos = async (filtros) => {
    return await prisma.lOJA.findMany({
        where: filtros
    });
};

export const buscarPorId = async (id) => {
    return await prisma.lOJA.findUnique({
        where: { ID_LOJA: id }
    })
}

export const buscarPorCnpj = (cnpj) => {
    return prisma.lOJA.findFirst({
        where: {CNPJ: cnpj}
    });
};

export const criar = (dado) => {
    return prisma.lOJA.create({
        data: dado
    })
}

export const deletar = async (id) => {
    return await prisma.lOJA.delete({
        where: { ID_LOJA: id }
    });
}