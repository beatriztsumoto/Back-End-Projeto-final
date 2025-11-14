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
]

export const listarTodos = async (req, res) => {
    try {

        const lojas = await lojaModel.listarTodos();

        if(!lojas || lojas.length === 0) {
            res.status(404).json({
                total:lojas.length,
                mensagem:"Não há lojas na lista"
            })
    }

        res.status(200).json({
            total: lojas.length,
            mensagem:"Lista de lojas disponíveis",
            lojas
        })

    } catch (error) {
        res.status(500).json({
            erro:`Erro interno de servidor`,
            detalhes:error.message,
            status:500
        }) 
    }
}