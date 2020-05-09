import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }

  aside {
    width: 100%;
    padding: 16px;
    margin-bottom: 15px;

    background-color: #fff;
    border: 2px solid #000;
    border-radius: 4px;

    @media (min-width: 768px) {
      align-self: start;
      width: 270px;
    }

    @media (min-width: 1200px) {
      margin-left: 30px;
    }
  }
`;

export const CartTitle = styled.h1`
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const CartList = styled.ul`
  width: 100%;
  margin-bottom: 8px;

  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0;

    @media (min-width: 1200px) {
      padding: 16px 0;
    }

    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    img {
      width: 64px;
    }

    span {
      display: block;
    }

    p {
      font-weight: 700;
    }
  }
`;

export const CartPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
  }

  p {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const CardItem = styled.article`
  width: 46%;
  padding: 8px 16px;
  margin: 0 5px 10px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  @media (min-width: 900px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    padding: 16px 32px;
    margin: 0 10px 20px 10px;
  }

  img {
    width: 100%;
  }

  h1,
  p {
    margin-bottom: 8px;
    font-size: 16px;

    @media (min-width: 1200px) {
      margin-bottom: 16px;
      font-size: 22px;
    }
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-weight: 700;
  }
`;
