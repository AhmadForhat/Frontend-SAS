import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    max-width:700px;
    margin: 0 auto;
    padding: 20px;
    @media(max-width: 376px) {
        width:100%;
        padding: 20px 0;
    }
`