import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }

  img {
    margin: 0 auto 15px auto;
    display: block;

    @media (min-width: 768px) {
      margin-bottom: 48px;
    }
  }
`;

export const ThemeCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ThemeCardItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 478px;
  width: 100%;
  padding: 15px;

  background: ${(props) =>
    props.water
      ? 'linear-gradient(15deg, #d8e9f3 0%, #d8e9f3 50%, #457ab1 50%,#457ab1 100%)'
      : ''};

  background: ${(props) =>
    props.fire
      ? 'linear-gradient(15deg, #FB5023 0%, #FB5023 50%, #FEA31D 50%,#FEA31D 100%)'
      : ''};

  background: ${(props) =>
    props.dragon
      ? 'linear-gradient(15deg, #2C5437 0%, #2C5437 50%, #A5A891 50%,#A5A891 100%)'
      : ''};

  & + article {
    margin-top: 15px;

    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 16px;
    }
  }

  img {
    width: 150px;

    @media (min-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  a {
    max-width: 270px;
    width: 100%;

    background-color: #000;
    border: 2px solid transparent;
    border-radius: 6px;

    line-height: 40px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.2s;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: transparent;
      border: 2px solid #000;
      color: #000;
    }
  }
`;
