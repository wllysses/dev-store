import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'
import { IProduct } from '../../interfaces/'
import * as S from './styles'

export function Product({ title, image, category, price, product }: IProduct) {
    
    const { handleAddProductToCart, hasProductInCart } = useContext(ShoppingCartContext)

    return (
        <S.Card>
            <S.ProductCategory itemProp={category}>{category}</S.ProductCategory>
            <S.ProductImage src={image} alt={`Product Name: ${title}`}/>
            <S.ProductTitle title={title}>{title}</S.ProductTitle>
            <S.ProductPrice>
                {
                    price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                }
            </S.ProductPrice>

            <S.Button onClick={() => handleAddProductToCart(product)} disabled={hasProductInCart(product.id as number)}>
                { hasProductInCart(product.id as number) ? 'Produto adicionado' : 'Adicionar ao carrinho'}
            </S.Button>
        </S.Card>
    )
}