import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'
import { Container } from '../../styles/global'
import * as S from './styles'

export function CartList() {

    const { products, handleRemoveProductOnCart, totalPrice, handleChangeProductQuantity } = useContext(ShoppingCartContext)

    return (
        <Container>
            <S.CartLisWrapper>
                <S.CartList>
                    <S.CartListHeader>
                        <h2>Carrinho de compras</h2>
                        <span>{products.length} { products.length <= 1 ? 'Item' : 'Itens' }</span>
                    </S.CartListHeader>

                    <S.CartListBody>
                        {
                            products.length  < 1 && <span>Carrinho vazio</span>
                        }
                        {   
                            products.map(((product, index) => (
                                <S.Product key={index}>
                                    <img src={product.image} alt={`Product name: ${product.title}`} />
                                    <h3 className='product-title'>{product.title}</h3>
                                    <S.ProductQuantity>
                                        <span onClick={() => handleChangeProductQuantity(product.id as number, 'decrement')}>-</span>
                                        <span>{product.quantity}</span>
                                        <span onClick={() => handleChangeProductQuantity(product.id as number, 'increment')}>+</span>
                                    </S.ProductQuantity>
                                    <h3 className='product-price'>
                                        {
                                            product.price.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })
                                        }
                                    </h3>
                                    
                                    <FaTrashAlt onClick={() => handleRemoveProductOnCart(product.id as number)}/>
                                </S.Product>
                            )))
                        }
                    </S.CartListBody>
                </S.CartList>
                <S.OrderResume>
                    <S.OrderResumeHeader>
                        <h2>Detalhes da compra</h2>
                    </S.OrderResumeHeader>
                    <S.OrderResumeBody>
                        <S.PromitionalCodeArea>
                            <label htmlFor="">Código promocional</label>
                            <input type="text" placeholder='Informe o código' disabled/>
                            <span className='alert-message'>Função ainda indisponível</span>
                        </S.PromitionalCodeArea>
                        <S.OrderResumeData>
                            <div className='total-price'>
                                <h4>Total -</h4>
                                <h4>
                                    {
                                        totalPrice?.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }
                                </h4>
                            </div>
                        <button disabled={ totalPrice === 0 ? true : false }>
                            Finalizar compra
                            </button>
                        </S.OrderResumeData>
                    </S.OrderResumeBody>
                </S.OrderResume>
            </S.CartLisWrapper>
        </Container>
    )
}