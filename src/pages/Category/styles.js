import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 16px;
  margin-bottom: 48px;
`;

export const Content = styled.section`
  display: flex;

  div {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }

  aside {
    align-self: start;
    width: 270px;
    min-height: 100px;
    margin-left: 30px;
    padding: 16px;
    border: 2px solid #000;
    border-radius: 4px;

    h1 {
      font-size: 22px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }
  }
`;

export const CardItem = styled.article`
  width: 270px;
  padding: 16px 32px;
  margin-bottom: 30px;
  margin: 0 10px 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #000;
  border-radius: 4px;

  img {
    width: 224px;
  }

  h1,
  p {
    margin-bottom: 16px;
    font-size: 22px;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-weight: 700;
  }
`;
