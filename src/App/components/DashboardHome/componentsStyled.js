import styled from 'styled-components';

export const PrimaryTitle = styled.h1`
    margin-top:32px;
    margin-bottom: 16px;
    @media(max-width: 768px) {
        margin-top:40px;
        font-size:34px;
    };
    @media(max-width: 576px) {
        margin-top:32px;
        font-size:28px;
    };
    @media(max-width: 375px) {
        font-size:24px;
    };
`

export const ContainerHome = styled.div`
    display:flex;
    flex-direction:column;
    padding:16px;
    max-width:1052px;
    margin: 0 auto;
    height: 100%;
    margin-bottom: 40px;
    @media(max-width: 992px) {
        padding: 0 40px;
    };
    @media(max-width: 768px) {
        padding: 0 32px;
    };
    @media(max-width: 576px) {
        padding: 0 24px;
    };
    @media(max-width: 375px) {
        padding: 0 16px;
    }
`