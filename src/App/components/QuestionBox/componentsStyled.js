import styled from 'styled-components';

export const Box = styled.div`
    width:100%;
    height:563px;
    padding:32px 40px;
    margin-top:20px;
    background-color: #FFFFFF;
    border: 1px solid #E4E4E6;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
    border-radius: 8px;
    @media(max-width: 576px) {
        height: 100%;
        margin-bottom: 20px;
    };
`

export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:26px;
`

export const CardAnswer = styled.a`
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #FFFFFF;
    border: 1px solid #C9CCCF;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
    border-radius: 8px;
    margin-bottom:16px;
    padding:16px 12px;
    @media(max-width: 576px) {
        height: 70px;
    };
    @media(max-width: 376px) {
        height: 96px;
    }
`

export const CardAnswerActive = styled.a`
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #FFFFFF;
    border: 3px solid #0467DB;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
    border-radius: 8px;
    margin-bottom:16px;
    padding:16px 12px;
    @media(max-width: 576px) {
        height: 70px;
    };
    @media(max-width: 376px) {
        height: 96px;
    }
`

export const BtnAnswer = styled.button`
    width:150px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#C9CCCF;
    color:#ffffff;
    font-weight: 700;
    margin:0 auto;
    margin-top: 32px;
    @media(max-width: 768px) {
        width:100%
    }
    @media(max-width: 376px) {
        margin: 0;
        width: 90%;
    } 
`

export const BtnAnswerActive = styled.button`
    width:150px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#0467DB;
    color:#ffffff;
    font-weight: 700;
    margin:0 auto;
    margin-top: 32px;
    @media(max-width: 768px) {
        width:100%
    };
    @media(max-width: 376px) {
        margin: 0;
        width: 90%;
    }
`

export const ContainerButton = styled.div`
    @media(max-width: 376px) {
        justify-content: center;
        align-items: center;
        display: flex;
        width: 100%;
        position: fixed;
        height: 77px;
        left: 0px;
        right: 2px;
        bottom: 0px;
        background: #FFFFFF;
        box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    }
`