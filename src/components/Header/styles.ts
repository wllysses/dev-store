import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background-color: var(--primary-color);
    padding: 1rem;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    color: var(--white);

    span {
        color: var(--purple);
    }
`
export const ShoppingCartContainer = styled.div`
    position: relative;
    cursor: pointer;
`

export const QuantityItems = styled.span`
    display: inline-block;
    text-align: center;
    line-height: 12px;
    width: 12px;
    height: 12px;
    background-color: var(--purple);
    color: #ffffff;
    border-radius: 50%;
    font-size: 10px;

    position: absolute;
    top: -7px;
    right: -6px;
`