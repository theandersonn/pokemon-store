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
