import styled from 'styled-components'

export const CartLisWrapper = styled.div`
    padding-top: 5rem;
    width: 100%;

    display: flex;
    gap: 0.75rem;

    @media(max-width: 917px) {
        padding: 5rem 1rem 5rem;
        flex-direction: column;
    }
`

export const CartList = styled.div`
    min-height: 50vh;
    background-color: var(--white);
    padding: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .200);
    border-radius: 0.5rem;
    width: 70%;

    @media(max-width: 917px) {
        width: 100%;
    }
`

export const CartListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .200);
    padding-bottom: 0.7rem;
`

export const CartListBody = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const Product = styled.div`
    height: 80px;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid rgba(0, 0, 0, .200);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;

    img {
        max-width: 40px;
    }

    .product-title {
        width: 200px;
        font-size: 0.8rem;
    }

    svg {
        cursor: pointer;
    }
`

export const ProductQuantity = styled.div`
    width: 70px;
    background-color: var(--grey);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.25rem;
    cursor: pointer;
`

export const OrderResume = styled.div`
    min-height: 50vh;
    background-color: var(--white);
    padding: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .200);
    border-radius: 0.5rem;
    width: 30%;

    @media(max-width: 917px) {
        width: 100%;
    }
`

export const OrderResumeHeader = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .200);
    padding-bottom: 0.7rem;
`

export const OrderResumeBody = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PromitionalCodeArea = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    input {
        max-width: 320px;
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, .200);
        outline: none;
    }

    .alert-message {
        font-style: italic;
        color: red;
        font-size: 0.75rem;
    }
`

export const OrderResumeData = styled.div`
    .total-price {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        width: 100%;
        padding: 0.75rem;
        background-color: var(--purple);
        color: var(--white);
        font-weight: 700;
        font-size: 1rem;
        border: none;
        outline: none;
    }
`