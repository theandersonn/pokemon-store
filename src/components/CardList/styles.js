import styled from 'styled-components';

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
