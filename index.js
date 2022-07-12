

const body                  = document.querySelector('body')
const main                  = document.createElement('main')
const Titulo                = document.createElement('h1')
const ProductDetails        = document.createElement('ul')
const ProductDetails_li     = document.createElement('li')
const ProductDetails_corpo1 = document.createElement('p')
const ProductDetails_corpo2 = document.createElement('span')
const ProductList           = document.createElement('ul')
const footer                = document.createElement('ul')
const ProductSome           = document.createElement('li')
const footer_corpo1         = document.createElement('p')
const footer_corpo2         = document.createElement('span')

const section = document.createElement('section')
const ButtonEnd  = document.createElement('button')

Titulo.innerText           = 'Virtual Market'
ProductDetails.className   = 'ProductDetails'
ProductList.className      = 'itensDeCompra'
ProductDetails_corpo1.innerText = 'Item'
ProductDetails_corpo2.innerText = 'Valor'
footer_corpo1.innerText    = 'Total'
footer_corpo2.innerText    = `R$ ${total(productsCart)}`.replace('.',',')
ButtonEnd.innerText        = 'Finalizar compra'

body.appendChild(main)
main.appendChild(Titulo)
main.appendChild(ProductDetails)
ProductDetails.appendChild(ProductDetails_li)
ProductDetails_li.appendChild(ProductDetails_corpo1)
ProductDetails_li.appendChild(ProductDetails_corpo2)
main.appendChild(ProductList)
main.appendChild(section)
section.appendChild(footer)
footer.appendChild(ProductSome)
ProductSome.appendChild(footer_corpo1)
ProductSome.appendChild(footer_corpo2)
section.appendChild(ButtonEnd)

function listarProduto(listaProdutos){
    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let cardProduto         = criarProduto(produto)

        ProductList.appendChild(cardProduto) 
}
}

function criarProduto(produto){
    
    let nome       = produto.name
    let price      = produto.price

    const ProductItem  = document.createElement('li')
    const p            = document.createElement('p')
    const span         = document.createElement('span')

    p.innerText    = nome
    span.innerText = `R$ ${price}`.replace('.',',')

    ProductItem.appendChild(p)
    ProductItem.appendChild(span)

    return ProductItem

}

function total(arr){

    let soma = 0

    for(let i = 0; i<arr.length; i++){
        
        let produto             = arr[i]
        let valor               = produto.price
        soma+= valor 
}
return soma
}
listarProduto(productsCart)

