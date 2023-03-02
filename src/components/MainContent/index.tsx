import { Container } from "../../styles/global";
import { Filter } from "../Filter";
import { Products } from "../Products";

import * as S from './styles'

export function MainContent() {
    
    return (
        <Container>
            <S.Main>
                <Filter />
                <Products />
            </S.Main>
        </Container>
    )
}