import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonElement = styled.button`
  max-width: 270px;
  width: 100%;
  line-height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FFCB07')};
  }
`;
