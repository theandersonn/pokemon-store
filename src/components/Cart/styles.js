import styled from 'styled-components';

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
