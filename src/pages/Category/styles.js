import styled, { createGlobalStyle } from 'styled-components';

export const ThemeColor = createGlobalStyle`
  body {
  background: ${(props) =>
    props.agua
      ? 'linear-gradient(135deg, #d8e9f3 0%, #d8e9f3 50%, #457ab1 50%,#457ab1 100%); background-repeat: no-repeat; background-attachment: fixed;'
      : ''};

  background: ${(props) =>
    props.fogo
      ? 'linear-gradient(135deg, #FB5023 0%, #FB5023 50%, #FEA31D 50%,#FEA31D 100%); background-repeat: no-repeat; background-attachment: fixed;'
      : ''};

  background: ${(props) =>
    props.dragao
      ? 'linear-gradient(135deg, #2C5437 0%, #2C5437 50%, #A5A891 50%,#A5A891 100%); background-repeat: no-repeat; background-attachment: fixed;'
      : ''};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  justify-content: center;
  flex-direction: column;

  margin-top: 16px;
  margin-bottom: 15px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 48px;
  }
`;
