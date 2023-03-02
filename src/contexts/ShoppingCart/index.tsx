import { ChangeEvent, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildren, IContext, IProducts } from "../../interfaces";
import { api } from "../../services/api";

import produce from 'immer'

export const ShoppingCartContext = createContext({} as IContext)

export function ShoppingCartProvider({ children }: IChildren) {

    const [data, setData] = useState<IProducts[]>([])
    const [products, setProducts] = useState<IProducts[]>([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [select, setSelect] = useState('')

    function handleAddProductToCart(product: IProducts) {
        if(product) {
            setProducts([...products, product])

            toast.success('Produto adicionado ao carrinho 🛒', {
                autoClose: 2000
            })

            product.quantity = 1
        }
    }

    function handleRemoveProductOnCart(id: number | undefined) {
        if(id) {
            const filteredProducts = products.filter((product) => product.id !== id)
            setProducts(filteredProducts)

            toast.error('Produto removido do carrinho 🛒', {
                autoClose: 2000
            })
        }
    }

    function handleChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
        setSelect(e.target.value)
    }

    function hasProductInCart(id: number) {
        return products.filter((product) => product.id === id).length >= 1
    }

    function handleChangeProductQuantity(id: number, type: 'increment' | 'decrement') {
        const newCart = produce(products, (draft) => {
            const ProductAlreadyExistsInCart = products.findIndex((cartItem) => cartItem.id === id)
            console.log(ProductAlreadyExistsInCart)

            if(ProductAlreadyExistsInCart !== -1) {
              const item = draft[ProductAlreadyExistsInCart]
              draft[ProductAlreadyExistsInCart].quantity = type === "increment" ? item.quantity as number + 1 : item.quantity as number - 1
            }
        });

        setProducts(newCart);
    }

    useEffect(() => {
        select !== '' 
            ? api.get(`/products/category/${select}`).then(res => setData(res.data)) 
            : api.get('/products').then(res => setData(res.data))
    }, [select])
    
    useEffect(() => {
        function calculateTotalPrice() {
            let totalPrices = products.reduce((total, item) => {
                return total + (item.price * (item.quantity as number))
            }, 0)

            setTotalPrice(totalPrices)
        }

        calculateTotalPrice()
        
    }, [products])

    return (
        <ShoppingCartContext.Provider 
            value={{
                data,
                products,
                totalPrice,
                hasProductInCart,
                handleAddProductToCart, 
                handleRemoveProductOnCart,
                handleChangeSelect,
                handleChangeProductQuantity
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}