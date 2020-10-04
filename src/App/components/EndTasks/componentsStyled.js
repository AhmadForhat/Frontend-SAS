import styled from 'styled-components';

export const ContainerResults = styled.div`
    width:534px;
    height:577px;
    margin-top:63px;
    background: #FFFFFF;
    display:flex;
    flex-direction:column;
    border: 0.88px solid #E4E4E6;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
    border-radius: 7.04px;
    margin: 0 auto;
    margin-top: 62px;
    @media(max-width: 534px) {
        width:100%;
        height: 100%;
        margin-top:0;
    };
`

export const ContainerMsg = styled.div`
    width:100%;
    height: 237px;
    background-color: #438DE4;
    color:#ffffff;
    display:flex;
    justify-content:center;
    align-items: center;
`

export const Title = styled.h3`
    font-weigth:700;
    color:#ffffff;
    font-size: 36px;
    line-height: 48px;
`
export const SubTitle = styled.h3`
    font-weigth:400;
    color:#ffffff;
    font-size: 18px;
`


export const TextBox = styled.div`    
    color: #ffffff;
    margin-left: 25px;
`

export const ImageIcon = styled.img`
    width: 104.81px;
    height: 115.04px;
`

export const ContainerAllResults = styled.div`
    height: 240px;
    width: 100%;
    @media(max-width: 534px) {
        height:100%;
    };
`

export const BoxResume = styled.div`
    display: flex;
    height: 57px;
    width: 200px;
    background-color: #EFEFF2;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    margin: 0 auto;
    margin-top: 57px;
`

export const BoxTextResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NumberText = styled.h3`
    color:#343C58;
    font-size: 28px;
    line-height: 36px;
`

export const DescriptionText = styled.h3`
    color:#343C58;
    font-size: 13px;
    line-height: 18px;
`

export const BoxLevel = styled.div`
    display:flex;
    flex-direction:column;
`

export const ContainerLevels = styled.div`
    display:flex;
    width:80%;
    margin: 0 auto;
    margin-top:40px;
    margin-bottom:48px;
    justify-content: space-between;
    @media(max-width: 534px) {
        width:100%;
        flex-direction: column;
        align-items: center;
        height:278px;
        margin-bottom:40px;
        justify-content:space-around;
    };
`

export const TitleLevel = styled.h3`
    color: #343C58;
    font-size: 14px;
    line-height: 20px;
`

export const TextLevel = styled.h3`
    color: #343C58;
    font-size: 14px;
    line-height: 20px;
`

export const LineDiv = styled.div`
    width: 52px;
    height: 0px;
    border: 1px solid #B8BED5;
    background-color: #B8BED5;
    transform: rotate(90deg);
    display: flex;
    align-self: center;
    @media(max-width: 534px) {
        display:none;
    };
`

export const BackButton = styled.button`
    @media(max-width: 534px) {
        width: 90%;
        margin-bottom:16px;
    };
`