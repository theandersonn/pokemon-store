import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonElement = styled.button`
  max-width: 270px;
  width: 100%;
  line-height: 24px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s;

  @media (min-width: 432px) {
    line-height: 38px;
  }

  &:hover {
    background: ${shade(0.2, '#FFCB07')};
  }
`;
