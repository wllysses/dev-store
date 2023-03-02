import { ChangeEvent, ReactNode } from 'react'

export interface IChildren {
    children: ReactNode
}

export interface IContext {
    totalPrice: number | null
    data: IProducts[]
    products: IProducts[]
    handleAddProductToCart: (product: IProducts) => void
    handleRemoveProductOnCart: (id: number) => void
    handleChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    hasProductInCart: (id: number) => boolean
    handleChangeProductQuantity: (id: number, type: 'increment' | 'decrement') => void
}

export interface IProducts {
    id?: number
    title: string
    description?: string
    category?: string
    image: string
    price: number
    quantity?: number
}

export interface IProduct extends IProducts {
    product: IProducts
}