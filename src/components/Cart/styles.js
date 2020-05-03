import styled from 'styled-components';

export const CartList = styled.ul`
  width: 100%;
  margin-bottom: 32px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 16px 0;

    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  li {
    img {
      width: 48px;
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
  margin-bottom: 32px;

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
