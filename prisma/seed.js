import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Iniciando seed do banco de dados...')

  const lojas = [
    { nome: 'Magazine Luiza', logo: 'https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png' },
    { nome: 'Mercado Livre', logo: 'https://images.seeklogo.com/logo-png/26/1/mercado-livre-logo-png_seeklogo-264236.png' },
    { nome: 'Adidas', logo: 'https://images.seeklogo.com/logo-png/16/1/adidas-logo-png_seeklogo-168370.png' },
    { nome: 'Shopee', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/845px-Shopee_logo.svg.png' },
    { nome: 'Amazon', logo: 'https://logodownload.org/wp-content/uploads/2020/12/amazon-com-br-logo-0.png' },
    { nome: 'Casas Bahia', logo: 'https://images.seeklogo.com/logo-png/36/2/casas-bahia-logo-png_seeklogo-364898.png' },
    { nome: 'Nike', logo: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png' },
    { nome: 'O Boticário', logo: 'https://logodownload.org/wp-content/uploads/2014/10/boticario-logo-0.png' },
    { nome: 'Kalunga', logo: 'https://assets.multiplan.com.br/Multiplan/filer_public/58/d8/58d812f1-81b1-4e69-a0a0-d88f139c65f3/kalunga.webp' },
    { nome: 'Leroy Merlin', logo: 'https://logodownload.org/wp-content/uploads/2017/05/leroy-merlin-logo-1.png' },
    { nome: 'Eletrolux', logo: 'https://logodownload.org/wp-content/uploads/2017/04/electrolux-logo-4.png' },
    { nome: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png' },
    { nome: 'Sephora', logo: 'https://escolhaseucosmetico.com.br/wp-content/uploads/2022/08/SEPHORA-LOGO.png' },
    { nome: 'Zara', logo: 'https://logodownload.org/wp-content/uploads/2014/05/zara-logo-0.png' },
    { nome: 'Marisa', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-marisa.svg/2560px-Logo-marisa.svg.png' },
    { nome: 'Cacau Show', logo: 'https://logospng.org/wp-content/uploads/cacau-show.png' },
    { nome: 'Natura', logo: 'https://img1.gratispng.com/20180426/uce/avtlpzalt.webp' },
    { nome: 'Steam', logo: 'https://w7.pngwing.com/pngs/407/234/png-transparent-steam-mervils-a-vr-adventure-computer-icons-personal-computer-valve-corporation-steam-engine-game-logo-windows-thumbnail.png' },
    { nome: 'Shein', logo: 'https://w7.pngwing.com/pngs/625/778/png-transparent-shein-logo.png' },
    { nome: 'Renner', logo: 'https://logospng.org/wp-content/uploads/renner.png' },
    { nome: 'Burger King', logo: 'https://e7.pngegg.com/pngimages/110/824/png-clipart-hamburger-logo-burger-king-fast-food-brand-burger-king-food-text.png' },
    { nome: 'McDonald’s', logo: 'https://i.pinimg.com/736x/3e/cb/a8/3ecba88bff841698cef03d71220adaf6.jpg' },
    { nome: 'Lacoste', logo: 'https://i.pinimg.com/originals/ed/ac/43/edac4315fc32d6bf76c2e88807b189c6.jpg' },
    { nome: 'Drogasil', logo: 'https://logospng.org/wp-content/uploads/drogasil.png' },
    { nome: 'Carrefour', logo: 'https://e7.pngegg.com/pngimages/854/353/png-clipart-logo-counter-carrefour-typography-font-logo-corel-draw-blue-text-thumbnail.png' },
    { nome: 'Gucci', logo: 'https://e7.pngegg.com/pngimages/379/839/png-clipart-gucci-logo-gucci-logo-fashion-logo-gucci-text-trademark.png' },
    { nome: 'Pandora', logo: 'https://e7.pngegg.com/pngimages/260/89/png-clipart-pandora-logo-pandora-logo-icons-logos-emojis-shop-logos.png' },
    { nome: 'Avon', logo: 'https://w7.pngwing.com/pngs/932/887/png-transparent-avon-products-logo-business-cosmetics-business-angle-text-people-thumbnail.png' },
    { nome: 'Starbucks', logo: 'https://logospng.org/wp-content/uploads/starbucks.png' },
    { nome: 'Centauro', logo: 'https://logospng.org/wp-content/uploads/centauro.png' },
    { nome: 'Samsung', logo: 'https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png' },
    { nome: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { nome: 'Submarino', logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-1-1.png' },
    { nome: 'Ponto', logo: 'https://logodownload.org/wp-content/uploads/2021/04/ponto-logo-0.png' },
    { nome: 'Extra', logo: 'https://www.extra-imagens.com.br/HotSite/2015/manual-identidade/images/marca-extra-01.gif' },
    { nome: 'Fast Shop', logo: 'https://logodownload.org/wp-content/uploads/2017/11/fast-shop-logo.png' },
    { nome: 'Americanas', logo: 'https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-0.png' },
    { nome: 'Netshoes', logo: 'https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-0.png' },
    { nome: 'Aliexpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png' },
    { nome: 'Havan', logo: 'https://logodownload.org/wp-content/uploads/2015/05/havan-logo-0.png' },
    { nome: 'Tok&Stok', logo: 'https://logodownload.org/wp-content/uploads/2019/11/tok-stok-logo-0.png' },
    { nome: 'Etna', logo: 'https://sommelier.com.pe/wp-content/uploads/03_Etna.jpg' },
    { nome: 'Pernambucanas', logo: 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png' },
    { nome: 'Ri Happy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RIHAPPY_Logo.svg/2560px-RIHAPPY_Logo.svg.png' },
    { nome: 'Camicado', logo: 'https://logodownload.org/wp-content/uploads/2020/01/camicado-logo-0.png' },
    { nome: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png' },
    { nome: 'Polishop', logo: 'https://logodownload.org/wp-content/uploads/2019/08/polishop-logo-1.png' },
    { nome: 'Motorola', logo: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' },
    { nome: 'Vivo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRSnbu-b-VTVlPxS9DEq16cU_0qn8D6dcqg&s' },
    { nome: 'Claro', logo: 'https://logospng.org/wp-content/uploads/claro.jpg' },
    { nome: 'Tim', logo: 'https://www.logospng.org/wp-content/uploads/tim.jpg' },
    { nome: 'Amazon Fresh', logo: 'https://toppng.com/uploads/preview/amazon-fresh-logo-png-clipart-stock-amazon-echo-the-updated-2017-guide-book-11563015258zawsl9ls9d.png' },
    { nome: 'Riachuelo', logo: 'https://vetores.org/wp-content/uploads/riachuelo.png' },
    { nome: 'Youcom', logo: 'https://publicimages.brmalls.com.br/shoppings/ATEA-EW2LK.jpeg' },
    { nome: 'Arezzo', logo: 'https://logospng.org/wp-content/uploads/arezzo.png' },
    { nome: 'Melissa', logo: 'https://logospng.org/wp-content/uploads/melissa.png' },
    { nome: 'Schutz', logo: 'https://logospng.org/download/schutz/logo-schutz-1024.png' },
    { nome: 'Vans', logo: 'https://logospng.org/wp-content/uploads/vans.jpg' },
    { nome: 'Converse', logo: 'https://w7.pngwing.com/pngs/821/119/png-transparent-converse-sneakers-chuck-taylor-all-stars-shoe-logo-company-logo-angle-text-triangle.png' },
    { nome: 'Puket', logo: 'https://e7.pngegg.com/pngimages/367/267/png-clipart-yellow-logo-brand-fundacao-sistel-de-seguridade-social-others-purple-text-thumbnail.png' },
    { nome: 'C&A', logo: 'https://w7.pngwing.com/pngs/347/970/png-transparent-c-a-logo-california-miscellaneous-company-text.png' },
    { nome: 'Reserva', logo: 'https://logodownload.org/wp-content/uploads/2020/02/reserva-logo-0.png' },
    { nome: 'Lojas Americanas Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF63TYq4bbAydMFb9djBB8pY1PFWF8q6eCzw&s' },
    { nome: 'Drogaria São Paulo', logo: 'https://logospng.org/wp-content/uploads/drogaria-sao-paulo.png' },
    { nome: 'Chilli Beans', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxX08V3Y6XS961q7uKBUa6Go7mdabOjzSxg&s' },
    { nome: 'Swift', logo: 'https://vetores.org/wp-content/uploads/swift.png' },
    { nome: 'Subway', logo: 'https://e7.pngegg.com/pngimages/278/320/png-clipart-subway-logo-sandwich-restaurant-food-subway-food-text.png' },
    { nome: 'Pizza Hut', logo: 'https://e7.pngegg.com/pngimages/259/572/png-clipart-logo-kfc-pizza-hut-scalable-graphics-pizza-text-trademark.png' },
    { nome: 'Pão de Açúcar', logo: 'https://upload.wikimedia.org/wikipedia/pt/d/dd/Logomarca_do_P%C3%A3o_de_A%C3%A7%C3%BAcar_%28supermercado%29.png' },
    { nome: 'Carrefour Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxEXkl8onHb1jgbPJMSI9Cmo6-ehJ37TMOA&s' },
    { nome: 'Roldão Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sJzg-sdVX2vOyADAWti2GK-UorffcrugXQ&s' },
    { nome: 'Assaí Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoNQHH2v_q6JvQhjYqgeqIShewMAhX99ywA&s' },
    { nome: 'Droga Raia', logo: 'https://images.seeklogo.com/logo-png/24/1/droga-raia-logo-png_seeklogo-243034.png' },
    { nome: "L'Occitane", logo: 'https://logosmarcas.net/wp-content/uploads/2020/11/LOccitane-Logo.png' },
    { nome: 'Quem Disse, Berenice?', logo: 'https://i.pinimg.com/736x/b8/75/bb/b875bb276a0f62507c2f4c930e2641f2.jpg' },
    { nome: 'Osklen', logo: 'https://logodownload.org/wp-content/uploads/2019/08/osklen-logo-0.png' },
    { nome: 'Colcci', logo: 'https://logodownload.org/wp-content/uploads/2014/11/colcci-logo-0.png' },
    { nome: 'Hering', logo: 'https://logodownload.org/wp-content/uploads/2018/06/hering-logo-0.png' },
    { nome: 'Luigi Bertolli', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Images_luigi.png' },
    { nome: 'TNG', logo: 'https://gsobmidia.com.br/uploads/lojas/463/logo-tng-01_1705340987.png' },
    { nome: 'Kipling', logo: 'https://portaldasmalas.com.br/blog-portal/wp-content/uploads/2017/07/marcas-kipling-300x225.jpg' },
    { nome: 'Oakley', logo: 'https://images.seeklogo.com/logo-png/20/2/oakley-logo-png_seeklogo-201503.png' },
    { nome: "Bob’s", logo: 'https://logodownload.org/wp-content/uploads/2019/11/bobs-logo-1.png' },
    { nome: "Domino’s Pizza", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1024px-Dominos_pizza_logo.svg.png' },
    { nome: 'Ray-Ban', logo: 'https://w7.pngwing.com/pngs/843/961/png-transparent-ray-ban-i-r-mcgarvey-opticians-sunglasses-oakley-inc-ray-ban-love-text-fashion.png' },
    { nome: 'NBA Store', logo: 'https://images.seeklogo.com/logo-png/33/1/nba-store-logo-png_seeklogo-334917.png' },
    { nome: 'Deca', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHndk2A5ZqOZiiRegcLu7C2tFwWqsEfGYLqw&s' },
    { nome: 'Tramontina', logo: 'https://http2.mlstatic.com/D_NQ_NP_846077-MLB52664708197_112022-O-prato-de-jantar-fundo-21cm-tramontina-sem-aba-porcelana.webp' },
    { nome: 'Arno', logo: 'https://images.tcdn.com.br/files/777993/themes/466/img/settings/logoarno.png' },
    { nome: 'Philips', logo: 'https://logospng.org/wp-content/uploads/philips.png' },
    { nome: 'LG', logo: 'https://w7.pngwing.com/pngs/852/935/png-transparent-lg-electronics-logo-lg-g3-lg-g5-lg-cdr-text-magenta-thumbnail.png' },
    { nome: 'Lenovo', logo: 'https://logospng.org/download/lenovo/logo-lenovo-vermelha-1024.png' },
    { nome: 'HP', logo: 'https://logospng.org/wp-content/uploads/hp.png' },
    { nome: 'Razer', logo: 'https://vetores.org/wp-content/uploads/razer.png' },
    { nome: 'Logitech', logo: 'https://vetores.org/wp-content/uploads/logitech.png' },
    { nome: 'Xbox Store', logo: 'https://w7.pngwing.com/pngs/197/711/png-transparent-xbox-360-xbox-one-video-game-consoles-xbox-electronics-text-logo-thumbnail.png' },
    { nome: 'PlayStation Store', logo: 'https://png.pngtree.com/element_our/png/20180723/playstation-logo-icon-png_44639.jpg' },
    { nome: 'KFC', logo: 'https://e7.pngegg.com/pngimages/498/197/png-clipart-kfc-logo-kfc-fast-food-crispy-fried-chicken-logo-round-kfc-logo-food-free-logo-design-template-thumbnail.png' },
    { nome: 'Outback', logo: 'https://toppng.com/uploads/preview/outback-steakhouse-vector-logo-11574173805e3sv7mggso.png' },
    { nome: 'Stanley', logo: 'https://publicimages.brmalls.com.br/shoppings/ATEA-5NLXDM.jpeg' },
  ]

  const cidadesSP = [
    'Campinas', 'Hortolândia', 'Indaiatuba', 'Itatiba',
    'Paulínia', 'Pedreira', 'Sumaré', 'Valinhos', 'Vinhedo'
  ]

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
        ENDERECO: endereco
      }
    })
  }

  console.log(`✅ ${lojas.length} lojas criadas com sucesso!`)
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })