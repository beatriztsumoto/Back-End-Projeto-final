import * as descontosModel from "../models/descontosModel.js";

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
        const { nome_loja , categoria, endereco_loja } = req.query;

        const filtros = {};

        //Filtro por nome da loja
        if (nome_loja) {
            filtros.LOJA = {
                OR: [
                  { NOME_SOCIAL: { contains: nome_loja, mode: "insensitive" } },
                  { NOME_FANTASIA: { contains: nome_loja, mode: "insensitive" } },
                ],
              };
        }

        //Filtro por categoria
        if (categoria) {
            const permitido = categoriasPermitidas
                .map(c => c.toLowerCase())
                .includes(categoria.toLowerCase());

            if (!permitido) {
                return res.status(400).json({
                    status: 400,
                    error: "Categoria inválida",
                    suggestion: [
                        "procure por uma das categorias permitidas"
                    ],
                    categoriasPermitidas,
                });
            }

            filtros.CATEGORIA = {
                contains: categoria,
                mode: "insensitive"
            };
        }

        //Filtro por endereco
        if (endereco_loja) {
            filtros.LOJA = {
              ENDERECO: { contains: endereco_loja, mode: "insensitive" },
            };
          }


        const descontos = await descontosModel.listarTodos(filtros);

        if (!descontos || descontos.length === 0) {
            return res.status(404).json({
                status: 404,
                total: 0,
                message: "Não há descontos na lista",
                suggestion: [
                    "Verifique se a informação inserida está correta",
                    "Verifique se há descontos registrados com a informação inserida"
                ]
            });
        }

        return res.status(200).json({
            status: 200,
            success: true,
            total: descontos.length,
            message: "Descontos encontrados com sucesso!",
            data: descontos
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Erro ao listar descontos",
            error: error.message
        })
    }
}