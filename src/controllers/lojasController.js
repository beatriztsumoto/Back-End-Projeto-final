import * as lojaModel from '../models/lojasModels.js';

const categoriasPermitidas = [
    'Moda e Acessórios',
    'Tecnologia e Eletrônicos',
    'Casa, Decoração e Utensílios',
    'Eletrodomésticos e Móveis',
    'Beleza e Cosméticos',
    'Saúde e Farmácia',
    'Alimentação e Delivery',
    'Esporte e Lazer',
    'Pet Shop e Produtos para Animais',
    'Educação e Livraria',
    'Bebê e Criança',
    'Papelaria e Escritório',
    'Serviços e Financeiros'
];

export const listarTodos = async (req, res) => {
    try {
        const { nome, endereco, categoria } = req.query;

        const filtros = {};

        // Filtro por nome
        if (nome) {
            filtros.OR = [
                { NOME_SOCIAL: { contains: nome, mode: "insensitive" } },
                { NOME_FANTASIA: { contains: nome, mode: "insensitive" } }
            ];
        }

        // Filtro por endereço
        if (endereco) {
            filtros.ENDERECO = {
                contains: endereco,
                mode: "insensitive"
            };
        }

        // Filtro por categoria
        if (categoria) {
            const permitido = categoriasPermitidas
                .map(c => c.toLowerCase())
                .includes(categoria.toLowerCase());

            if (!permitido) {
                return res.status(400).json({
                    erro: "Categoria inválida",
                    categoriasPermitidas
                });
            }

            filtros.CATEGORIA = {
                contains: categoria,
                mode: "insensitive"
            };
        }

        const lojas = await lojaModel.listarTodos(filtros);

        if (!lojas || lojas.length === 0) {
            return res.status(404).json({
                total: 0,
                mensagem: "Não há lojas na lista"
            });
        }

        return res.status(200).json({
            total: lojas.length,
            mensagem: "Lista de lojas disponíveis",
            lojas
        });

    } catch (error) {
        return res.status(500).json({
            erro: "Erro interno de servidor",
            detalhes: error.message,
            status: 500
        });
    }
};