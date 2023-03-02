import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { Product } from "../Product";
import { RotatingLines } from  'react-loader-spinner'

import * as S from './styles'

export function Products() {

    const { data: products } = useContext(ShoppingCartContext)

    return (
            <S.ProductsWrapper>
                <S.Title>Lista de produtos</S.Title>
                <S.Products>
                    {
                        products.length < 1 && <RotatingLines strokeColor="black"/>
                    }
                    {
                        products && 
                        products.map((product) => (
                                <Product
                                    key={product.id}
                                    title={product.title}
                                    image={product.image}
                                    category={product.category}
                                    price={product.price}
                                    product={product}
                                />
                            )
                        )
                    }
                </S.Products>
            </S.ProductsWrapper>
    )
}