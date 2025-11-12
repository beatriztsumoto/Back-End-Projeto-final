import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 🏷️ Categorias e produtos realistas
const categoriasComProdutos = {
  'Moda e Acessórios': [
    'Tênis Nike Air Max',
    'Bolsa Feminina Couro Ecológico',
    'Relógio Casio Vintage',
    'Jaqueta Jeans Oversized',
    'Camiseta Básica Hering',
  ],
  'Tecnologia e Eletrônicos': [
    'Smartband Samsung Galaxy Fit3',
    'Fone Bluetooth JBL Wave 200TWS',
    'Notebook Dell Inspiron i5',
    'Smartwatch Amazfit Bip 5',
    'Mouse Gamer Redragon Cobra',
  ],
  'Casa, Decoração e Utensílios': [
    'Jogo de Panelas Tramontina 5 Peças',
    'Cortina Blackout 2,80m',
    'Kit Organizadores de Gaveta',
    'Relógio de Parede Moderno',
    'Tapete Antiderrapante 1,5m',
  ],
  'Beleza e Cosméticos': [
    'Perfume Carolina Herrera Good Girl',
    'Kit Skincare Nivea',
    'Secador Taiff Style 2000W',
    'Máscara Capilar L’Oréal Professionnel',
    'Base Líquida Ruby Rose',
  ],
  'Alimentação e Delivery': [
    'Pizza Grande + Refrigerante',
    'Combo de Sushi 30 Peças',
    'Hambúrguer Artesanal com Batata',
    'Marmita Fit Semanal',
    'Açaí 500ml com Granola',
  ],
  'Esporte e Lazer': [
    'Bola de Futebol Adidas',
    'Bicicleta Caloi Andes',
    'Colchonete para Yoga',
    'Halter 10kg Par',
    'Skate Street Iniciante',
  ],
  'Pet Shop e Produtos para Animais': [
    'Ração Golden Special 15kg',
    'Caminha Pet Média',
    'Coleira Antipulgas Seresto',
    'Brinquedo Mordedor Pet',
    'Shampoo Neutro para Cães',
  ],
  'Educação e Livraria': [
    'Livro: O Poder do Hábito',
    'Curso Online de Programação',
    'Mochila Escolar Reforçada',
    'Caderno Universitário 10 Matérias',
    'Canetas Stabilo 10 Cores',
  ],
  'Automotivo e Peças': [
    'Kit de Ferramentas Tramontina',
    'Aspirador Automotivo Black+Decker',
    'Central Multimídia Pioneer',
    'Cera Automotiva 3M',
    'Tapete de Borracha Universal',
  ],
}

// 💰 Faixa de preço por categoria
function gerarPrecoPorCategoria(categoria) {
  const ranges = {
    'Moda e Acessórios': [50, 300],
    'Tecnologia e Eletrônicos': [100, 2000],
    'Casa, Decoração e Utensílios': [80, 800],
    'Beleza e Cosméticos': [30, 200],
    'Alimentação e Delivery': [20, 100],
    'Esporte e Lazer': [80, 1000],
    'Pet Shop e Produtos para Animais': [30, 500],
    'Educação e Livraria': [40, 300],
    'Automotivo e Peças': [150, 1500],
  }

  const [min, max] = ranges[categoria] || [50, 500]
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 🚀 Função para gerar desconto
function gerarDesconto(loja) {
  const categoria = loja.CATEGORIA
  const produtos = categoriasComProdutos[categoria] || ['Produto Genérico']
  const produto = produtos[Math.floor(Math.random() * produtos.length)]
  const preco = gerarPrecoPorCategoria(categoria)

  return {
    TITULO: produto,
    FOTO_ITEM: 'https://via.placeholder.com/300x300.png?text=Promoção',
    VALOR_DESCONTO: preco,
    DESCRICAO: `Oferta exclusiva na loja ${loja.NOME_FANTASIA}! Desconto em ${produto} da categoria ${categoria}.`,
    CATEGORIA: categoria,
    ID_LOJA: loja.ID_LOJA,
  }
}

async function main() {
  console.log('🚀 Iniciando seed do banco de dados...')

const lojas = [
  { nome: 'Magazine Luiza', logo: 'https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Mercado Livre', logo: 'https://images.seeklogo.com/logo-png/26/1/mercado-livre-logo-png_seeklogo-264236.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Adidas', logo: 'https://images.seeklogo.com/logo-png/16/1/adidas-logo-png_seeklogo-168370.png', categoria: 'Moda e Acessórios' },
  { nome: 'Shopee', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/845px-Shopee_logo.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Amazon', logo: 'https://logodownload.org/wp-content/uploads/2020/12/amazon-com-br-logo-0.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Casas Bahia', logo: 'https://images.seeklogo.com/logo-png/36/2/casas-bahia-logo-png_seeklogo-364898.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Nike', logo: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'O Boticário', logo: 'https://logodownload.org/wp-content/uploads/2014/10/boticario-logo-0.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Kalunga', logo: 'https://assets.multiplan.com.br/Multiplan/filer_public/58/d8/58d812f1-81b1-4e69-a0a0-d88f139c65f3/kalunga.webp', categoria: 'Papelaria e Escritório' },
  { nome: 'Leroy Merlin', logo: 'https://logodownload.org/wp-content/uploads/2017/05/leroy-merlin-logo-1.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Eletrolux', logo: 'https://logodownload.org/wp-content/uploads/2017/04/electrolux-logo-4.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Sephora', logo: 'https://escolhaseucosmetico.com.br/wp-content/uploads/2022/08/SEPHORA-LOGO.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Zara', logo: 'https://logodownload.org/wp-content/uploads/2014/05/zara-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Marisa', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-marisa.svg/2560px-Logo-marisa.svg.png', categoria: 'Moda e Acessórios' },
  { nome: 'Cacau Show', logo: 'https://logospng.org/wp-content/uploads/cacau-show.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Natura', logo: 'https://img1.gratispng.com/20180426/uce/avtlpzalt.webp', categoria: 'Beleza e Cosméticos' },
  { nome: 'Steam', logo: 'https://w7.pngwing.com/pngs/407/234/png-transparent-steam-mervils-a-vr-adventure-computer-icons-personal-computer-valve-corporation-steam-engine-game-logo-windows-thumbnail.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Shein', logo: 'https://w7.pngwing.com/pngs/625/778/png-transparent-shein-logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Renner', logo: 'https://logospng.org/wp-content/uploads/renner.png', categoria: 'Moda e Acessórios' },
  { nome: 'Burger King', logo: 'https://e7.pngegg.com/pngimages/110/824/png-clipart-hamburger-logo-burger-king-fast-food-brand-burger-king-food-text.png', categoria: 'Alimentação e Delivery' },
  { nome: 'McDonald’s', logo: 'https://i.pinimg.com/736x/3e/cb/a8/3ecba88bff841698cef03d71220adaf6.jpg', categoria: 'Alimentação e Delivery' },
  { nome: 'Lacoste', logo: 'https://i.pinimg.com/originals/ed/ac/43/edac4315fc32d6bf76c2e88807b189c6.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Drogasil', logo: 'https://logospng.org/wp-content/uploads/drogasil.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Carrefour', logo: 'https://e7.pngegg.com/pngimages/854/353/png-clipart-logo-counter-carrefour-typography-font-logo-corel-draw-blue-text-thumbnail.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Gucci', logo: 'https://e7.pngegg.com/pngimages/379/839/png-clipart-gucci-logo-gucci-logo-fashion-logo-gucci-text-trademark.png', categoria: 'Moda e Acessórios' },
  { nome: 'Pandora', logo: 'https://e7.pngegg.com/pngimages/260/89/png-clipart-pandora-logo-pandora-logo-icons-logos-emojis-shop-logos.png', categoria: 'Moda e Acessórios' },
  { nome: 'Avon', logo: 'https://w7.pngwing.com/pngs/932/887/png-transparent-avon-products-logo-business-cosmetics-business-angle-text-people-thumbnail.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Starbucks', logo: 'https://logospng.org/wp-content/uploads/starbucks.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Centauro', logo: 'https://logospng.org/wp-content/uploads/centauro.png', categoria: 'Esporte e Lazer' },
  { nome: 'Samsung', logo: 'https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Submarino', logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-1-1.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Ponto', logo: 'https://logodownload.org/wp-content/uploads/2021/04/ponto-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Extra', logo: 'https://www.extra-imagens.com.br/HotSite/2015/manual-identidade/images/marca-extra-01.gif', categoria: 'Alimentação e Delivery' },
  { nome: 'Fast Shop', logo: 'https://logodownload.org/wp-content/uploads/2017/11/fast-shop-logo.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Americanas', logo: 'https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-0.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Netshoes', logo: 'https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-0.png', categoria: 'Esporte e Lazer' },
  { nome: 'Aliexpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Havan', logo: 'https://logodownload.org/wp-content/uploads/2015/05/havan-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Tok&Stok', logo: 'https://logodownload.org/wp-content/uploads/2019/11/tok-stok-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Etna', logo: 'https://sommelier.com.pe/wp-content/uploads/03_Etna.jpg', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Pernambucanas', logo: 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Ri Happy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RIHAPPY_Logo.svg/2560px-RIHAPPY_Logo.svg.png', categoria: 'Bebê e Criança' },
  { nome: 'Camicado', logo: 'https://logodownload.org/wp-content/uploads/2020/01/camicado-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png', categoria: 'Esporte e Lazer' },
  { nome: 'Polishop', logo: 'https://logodownload.org/wp-content/uploads/2019/08/polishop-logo-1.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Motorola', logo: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Vivo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRSnbu-b-VTVlPxS9DEq16cU_0qn8D6dcqg&s', categoria: 'Serviços e Financeiros' },
  { nome: 'Claro', logo: 'https://logospng.org/wp-content/uploads/claro.jpg', categoria: 'Serviços e Financeiros' },
  { nome: 'Tim', logo: 'https://www.logospng.org/wp-content/uploads/tim.jpg', categoria: 'Serviços e Financeiros' },
  { nome: 'Amazon Fresh', logo: 'https://toppng.com/uploads/preview/amazon-fresh-logo-png-clipart-stock-amazon-echo-the-updated-2017-guide-book-11563015258zawsl9ls9d.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Riachuelo', logo: 'https://vetores.org/wp-content/uploads/riachuelo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Youcom', logo: 'https://publicimages.brmalls.com.br/shoppings/ATEA-EW2LK.jpeg', categoria: 'Moda e Acessórios' },
  { nome: 'Arezzo', logo: 'https://logospng.org/wp-content/uploads/arezzo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Melissa', logo: 'https://logospng.org/wp-content/uploads/melissa.png', categoria: 'Moda e Acessórios' },
  { nome: 'Schutz', logo: 'https://logospng.org/download/schutz/logo-schutz-1024.png', categoria: 'Moda e Acessórios' },
  { nome: 'Vans', logo: 'https://logospng.org/wp-content/uploads/vans.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Converse', logo: 'https://w7.pngwing.com/pngs/821/119/png-transparent-converse-sneakers-chuck-taylor-all-stars-shoe-logo-company-logo-angle-text-triangle.png', categoria: 'Moda e Acessórios' },
  { nome: 'Puket', logo: 'https://e7.pngegg.com/pngimages/367/267/png-clipart-yellow-logo-brand-fundacao-sistel-de-seguridade-social-others-purple-text-thumbnail.png', categoria: 'Moda e Acessórios' },
  { nome: 'C&A', logo: 'https://w7.pngwing.com/pngs/347/970/png-transparent-c-a-logo-california-miscellaneous-company-text.png', categoria: 'Moda e Acessórios' },
  { nome: 'Reserva', logo: 'https://logodownload.org/wp-content/uploads/2020/02/reserva-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Lojas Americanas Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF63TYq4bbAydMFb9djBB8pY1PFWF8q6eCzw&s', categoria: 'Serviços e Financeiros' },
  { nome: 'Drogaria São Paulo', logo: 'https://logospng.org/wp-content/uploads/drogaria-sao-paulo.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Chilli Beans', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxX08V3Y6XS961q7uKBUa6Go7mdabOjzSxg&s', categoria: 'Moda e Acessórios' },
  { nome: 'Swift', logo: 'https://vetores.org/wp-content/uploads/swift.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Subway', logo: 'https://e7.pngegg.com/pngimages/278/320/png-clipart-subway-logo-sandwich-restaurant-food-subway-food-text.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pizza Hut', logo: 'https://e7.pngegg.com/pngimages/259/572/png-clipart-logo-kfc-pizza-hut-scalable-graphics-pizza-text-trademark.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pão de Açúcar', logo: 'https://upload.wikimedia.org/wikipedia/pt/d/dd/Logomarca_do_P%C3%A3o_de_A%C3%A7%C3%BAcar_%28supermercado%29.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Carrefour Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxEXkl8onHb1jgbPJMSI9Cmo6-ehJ37TMOA&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Roldão Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sJzg-sdVX2vOyADAWti2GK-UorffcrugXQ&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Assaí Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoNQHH2v_q6JvQhjYqgeqIShewMAhX99ywA&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Droga Raia', logo: 'https://images.seeklogo.com/logo-png/24/1/droga-raia-logo-png_seeklogo-243034.png', categoria: 'Saúde e Farmácia' },
  { nome: "L'Occitane", logo: 'https://logosmarcas.net/wp-content/uploads/2020/11/LOccitane-Logo.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Quem Disse, Berenice?', logo: 'https://i.pinimg.com/736x/b8/75/bb/b875bb276a0f62507c2f4c930e2641f2.jpg', categoria: 'Beleza e Cosméticos' },
  { nome: 'Osklen', logo: 'https://logodownload.org/wp-content/uploads/2019/08/osklen-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Colcci', logo: 'https://logodownload.org/wp-content/uploads/2014/11/colcci-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Hering', logo: 'https://logodownload.org/wp-content/uploads/2018/06/hering-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Luigi Bertolli', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Images_luigi.png', categoria: 'Moda e Acessórios' },
  { nome: 'TNG', logo: 'https://gsobmidia.com.br/uploads/lojas/463/logo-tng-01_1705340987.png', categoria: 'Moda e Acessórios' },
  { nome: 'Kipling', logo: 'https://portaldasmalas.com.br/blog-portal/wp-content/uploads/2017/07/marcas-kipling-300x225.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Oakley', logo: 'https://images.seeklogo.com/logo-png/20/2/oakley-logo-png_seeklogo-201503.png', categoria: 'Moda e Acessórios' },
  { nome: "Bob’s", logo: 'https://logodownload.org/wp-content/uploads/2019/11/bobs-logo-1.png', categoria: 'Alimentação e Delivery' },
  { nome: "Domino’s Pizza", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Cinemark', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cinemark_logo.svg/2560px-Cinemark_logo.svg.png', categoria: 'Esporte e Lazer' },
  { nome: 'Petz', logo: 'https://logodownload.org/wp-content/uploads/2019/08/petz-logo-0.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Cobasi', logo: 'https://logodownload.org/wp-content/uploads/2021/03/cobasi-logo.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Livraria Cultura', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Livraria_Cultura_logo.svg/1280px-Livraria_Cultura_logo.svg.png', categoria: 'Educação e Livraria' },
  { nome: 'Saraiva', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Saraiva_logo_2022.png', categoria: 'Educação e Livraria' },
  { nome: 'Kalunga Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNRfN6F4hRbaHghvRh0A2Pw_OiBqRJ4nFkg&s', categoria: 'Papelaria e Escritório' },
  { nome: 'Brastemp', logo: 'https://logodownload.org/wp-content/uploads/2014/03/brastemp-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Consul', logo: 'https://logodownload.org/wp-content/uploads/2014/04/consul-logo-1.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Philco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Philco_logo.svg/1280px-Philco_logo.svg.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Panasonic_logo_(Blue).svg/2560px-Panasonic_logo_(Blue).svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Canon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sony_wordmark.svg/1280px-Sony_wordmark.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'GoPro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/GoPro_logo.svg/2560px-GoPro_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Intelbras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Intelbras_logo.svg/2560px-Intelbras_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Multilaser', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Multilaser_logo.svg/2560px-Multilaser_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LG_logo_(2015).svg/1280px-LG_logo_(2015).svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Philips', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Philips_logo.svg/1280px-Philips_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' }
];

  const cidadesSP = [
    'Campinas', 'Hortolândia', 'Indaiatuba', 'Itatiba',
    'Paulínia', 'Pedreira', 'Sumaré', 'Valinhos', 'Vinhedo'
  ]

  // 1️⃣ Criar todas as lojas
  for (let i = 0; i < lojas.length; i++) {
    const cidade = cidadesSP[Math.floor(Math.random() * cidadesSP.length)]
    const endereco = `${cidade} - SP`

    await prisma.lOJA.create({
      data: {
        NOME_SOCIAL: `${lojas[i].nome} LTDA`,
        NOME_FANTASIA: lojas[i].nome,
        LOGO: lojas[i].logo,
        CNPJ: String(10000000000000 + i).padStart(14, '0'),
        TELEFONE_COMERCIAL: `11${String(900000000 + i).padStart(9, '0')}`,
        ENDERECO: endereco,
        CATEGORIA: lojas[i].categoria
      }
    })
  }

  console.log(`✅ ${lojas.length} lojas criadas com sucesso!`)

  // 2️⃣ Criar descontos para cada loja
  const todasLojas = await prisma.lOJA.findMany()

  for (const loja of todasLojas) {
    const descontosExistentes = await prisma.dESCONTOS.count({
      where: { ID_LOJA: loja.ID_LOJA },
    })

    if (descontosExistentes === 0) {
      const descontos = Array.from({ length: 3 }, () => gerarDesconto(loja))
      await prisma.dESCONTOS.createMany({ data: descontos })
      console.log(`✅ Criados 3 descontos para a loja: ${loja.NOME_FANTASIA}`)
    } else {
      console.log(`⏩ Loja ${loja.NOME_FANTASIA} já possui descontos, pulando...`)
    }
  }

  console.log('🎉 Seed finalizado com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })