import styled from 'styled-components';

export const Container = styled.div`
    z-index:99;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 0.5;
    background-color:#1E2124;
    width:100%;
    height: 100%;
`
export const ContainerToBox = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxCorrect = styled.div`
    z-index:9999;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    width: 328px;
    height: 228px;
    border: 3px solid #32CB82;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
    border-radius: 8px;
`

export const BoxWrong = styled.div`
    z-index:9999;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    width: 328px;
    height: 228px;
    border: 3px solid #FF4F4F;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
    border-radius: 8px;
`

export const Button = styled.button`
    height: 44px;
    width: 148px;
    background: #0467DB;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color:#ffffff;
    font-weight:700;
    margin-top:30px;
    margin-bottom:30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
`