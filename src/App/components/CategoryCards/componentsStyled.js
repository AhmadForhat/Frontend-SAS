import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
  gap: 2%;
  margin-bottom: 60px;
  @media(max-width: 662px) {
    grid-template-columns: 3fr 3fr 3fr;
  };
  @media(max-width: 480px) {
    grid-template-columns: 2fr 2fr;
  }
`

export const ContainerCard = styled.div`
  width: 96%;
  height: 104px;
  margin-top:16px;
  background-color:#ffffff;
  padding:16px;
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  border: 1px solid #E4E4E6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
`