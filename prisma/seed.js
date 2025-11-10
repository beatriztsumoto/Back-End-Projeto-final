import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Iniciando seed do banco de dados...')

  const nomesLojas = [
    'Magazine Luiza', 'Mercado Livre', 'Adidas', 'Shopee', 'Amazon', 'Casas Bahia',
    'Nike', 'O Boticário', 'Kalunga', 'Leroy Merlin', 'Eletrolux', 'Dell', 'Sephora',
    'Zara', 'Marisa', 'Cacau Show', 'Natura', 'Steam', 'Shein', 'Renner', 'Burger King',
    'McDonald’s', 'Lacoste', 'Drogasil', 'Carrefour', 'Gucci', 'Pandora', 'Avon',
    'Starbucks', 'Centauro'
  ]

  const logos = [
    'https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png',
    'https://images.seeklogo.com/logo-png/26/1/mercado-livre-logo-png_seeklogo-264236.png',
    'https://images.seeklogo.com/logo-png/16/1/adidas-logo-png_seeklogo-168370.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/845px-Shopee_logo.svg.png',
    'https://logodownload.org/wp-content/uploads/2020/12/amazon-com-br-logo-0.png',
    'https://images.seeklogo.com/logo-png/36/2/casas-bahia-logo-png_seeklogo-364898.png',
    'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png',
    'https://logodownload.org/wp-content/uploads/2014/10/boticario-logo-0.png',
    'https://assets.multiplan.com.br/Multiplan/filer_public/58/d8/58d812f1-81b1-4e69-a0a0-d88f139c65f3/kalunga.webp',
    'https://logodownload.org/wp-content/uploads/2017/05/leroy-merlin-logo-1.png',
    'https://logodownload.org/wp-content/uploads/2017/04/electrolux-logo-4.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png',
    'https://escolhaseucosmetico.com.br/wp-content/uploads/2022/08/SEPHORA-LOGO.png',
    'https://logodownload.org/wp-content/uploads/2014/05/zara-logo-0.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-marisa.svg/2560px-Logo-marisa.svg.png',
    'https://logospng.org/wp-content/uploads/cacau-show.png',
    'https://img1.gratispng.com/20180426/uce/avtlpzalt.webp',
    'https://w7.pngwing.com/pngs/407/234/png-transparent-steam-mervils-a-vr-adventure-computer-icons-personal-computer-valve-corporation-steam-engine-game-logo-windows-thumbnail.png',
    'https://w7.pngwing.com/pngs/625/778/png-transparent-shein-logo.png',
    'https://logospng.org/wp-content/uploads/renner.png',
    'https://e7.pngegg.com/pngimages/110/824/png-clipart-hamburger-logo-burger-king-fast-food-brand-burger-king-food-text.png',
    'https://i.pinimg.com/736x/3e/cb/a8/3ecba88bff841698cef03d71220adaf6.jpg',
    'https://i.pinimg.com/originals/ed/ac/43/edac4315fc32d6bf76c2e88807b189c6.jpg',
    'https://logospng.org/wp-content/uploads/drogasil.png',
    'https://e7.pngegg.com/pngimages/854/353/png-clipart-logo-counter-carrefour-typography-font-logo-corel-draw-blue-text-thumbnail.png',
    'https://e7.pngegg.com/pngimages/379/839/png-clipart-gucci-logo-gucci-logo-fashion-logo-gucci-text-trademark.png',
    'https://e7.pngegg.com/pngimages/260/89/png-clipart-pandora-logo-pandora-logo-icons-logos-emojis-shop-logos.png',
    'https://w7.pngwing.com/pngs/932/887/png-transparent-avon-products-logo-business-cosmetics-business-angle-text-people-thumbnail.png',
    'https://logospng.org/wp-content/uploads/starbucks.png',
    'https://logospng.org/wp-content/uploads/centauro.png'
  ]

  // Cidades em SP (distribuídas aleatoriamente)
  const cidadesSP = [
    'Campinas', 'Hortolândia', 'Indaiatuba', 'Itatiba',
    'Paulínia', 'Pedreira', 'Sumaré', 'Valinhos', 'Vinhedo'
  ]

  const lojas = []

  for (let i = 0; i < nomesLojas.length; i++) {
    // escolhe cidade aleatória
    const cidade = cidadesSP[Math.floor(Math.random() * cidadesSP.length)]
    const endereco = `${cidade} - SP`

    const loja = await prisma.lOJA.create({
      data: {
        NOME_SOCIAL: `${nomesLojas[i]} LTDA`,
        NOME_FANTASIA: nomesLojas[i],
        LOGO: logos[i],
        CNPJ: String(10000000000000 + i).padStart(14, '0'),
        TELEFONE_COMERCIAL: `11${String(900000000 + i).padStart(9, '0')}`,
        ENDERECO: endereco
      }
    })
    lojas.push(loja)
  }

  console.log('✅ 30 lojas criadas com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
