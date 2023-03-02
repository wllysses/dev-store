import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'
import * as S from './styles'

export function Filter() {

    const { handleChangeSelect } = useContext(ShoppingCartContext)

    const options = [
        { value:"", label: "All" },
        { value: "men's clothing", label: "Men's clothing" },
        { value: "women's clothing", label: "Women's clothing" },
        { value: "electronics", label: "Electronics" },
        { value: "jewelery", label: "Jewerely" }
    ]

    return (
        <S.Filter>
                    <S.Title>Categorias</S.Title>
                    <S.Select name="selectCategories" id="selectCategories" onChange={handleChangeSelect}>
                        {
                            options.map((option) => (
                                <S.Option key={option.value} value={option.value}>{option.label}</S.Option>
                            ))
                        }
                    </S.Select>
        </S.Filter>
    )
}