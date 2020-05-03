import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  img {
    margin: 0 auto 48px auto;
    display: block;
  }
`;

export const ThemeCard = styled.section`
  display: flex;
  justify-content: center;
`;

export const ThemeCardItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 478px;
  width: 100%;
  padding: 15px;

  background: linear-gradient(
    135deg,
    #d8e9f3 0%,
    #d8e9f3 50%,
    #457ab1 51%,
    #457ab1 100%
  );

  & + article {
    margin-left: 16px;
  }

  button {
    max-width: 270px;
    width: 100%;
    line-height: 40px;
    background-color: #000;
    color: #fff;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
