import styled from 'styled-components';

export const CardItem = styled.article`
  width: 270px;
  padding: 16px 32px;
  margin-bottom: 30px;
  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #000;
  border-radius: 4px;

  &:first-child,
  &:nth-child(4n) {
    margin-left: 0;
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
