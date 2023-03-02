import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { Container } from "../../styles/global";

import * as S from './styles'

export function Header() {

    const { products: cartProducts } = useContext(ShoppingCartContext)

    return (
        <S.HeaderWrapper>
            <Container>
                <S.Header>
                    <Link to="/">
                        <S.Title>
                            Dev<span>Store</span>
                        </S.Title>
                    </Link>

                    <Link to="/shopping-cart">
                        <S.ShoppingCartContainer>
                            <FaShoppingCart color='white' size={20} />
                            <S.QuantityItems>{cartProducts.length}</S.QuantityItems>
                        </S.ShoppingCartContainer>
                    </Link>
                </S.Header>
            </Container>
        </S.HeaderWrapper>
    )
}