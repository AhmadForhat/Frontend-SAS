import styled from 'styled-components';

export const CategoryTitle = styled.h1`
    font-size:32px;
    @media(max-width: 375px) {
        font-size:24px;
    };
`

export const Container = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    @media(max-width: 376px) {
        width:90%;
        margin: 0 auto;
    }    
`

export const LinkExit = styled.a`
    font-size:14px;
    color:#53595F;
    fontWeight:400;
    display:flex;
    align-items:center;
`

export const ImgExit = styled.img`
    margin-right: 7.5px;
`