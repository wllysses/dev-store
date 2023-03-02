import styled from 'styled-components'

export const Card = styled.div`
    padding: 0.5rem;
    max-width: 220px;
    height: 300px;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 3px 6px rgba(0, 0, 0, .150);
    border-radius: 0.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const ProductCategory = styled.span`
    align-self: flex-end;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.3rem;
    border-radius: 0.3rem;

    background-color: ${
        props => props.itemProp === 'jewelery' ? '#B98C45'
        : props.itemProp === 'electronics' ? 'red'
        : props.itemProp === `men's clothing` ? 'lightblue'
        : props.itemProp === `women's clothing` ? 'lightpink'
        : 'grey'
        };
        color: ${
        props => props.itemProp === 'electronics' ? 'white'
        : props.itemProp === 'jewelery' ? 'white'
        : props.itemProp === `men's clothing` ? 'black'
        : props.itemProp === `women's clothing` ? 'black'
        : 'grey'
    };
`

export const ProductImage = styled.img`
    max-width: 120px;
    height: 100px;
`

export const ProductTitle = styled.h5`
    width: 100%;
    text-align: center;

    //escondendo o texto e colocando reticências
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ProductPrice = styled.h5`
    font-size: 1.2rem;
`

export const Button = styled.button`
    background-color: var(--purple);
    color: var(--white);
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
`