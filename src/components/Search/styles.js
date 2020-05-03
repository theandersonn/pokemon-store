import styled from 'styled-components';

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;

  border: 1px dashed;
  max-width: 570px;
  width: 100%;
  height: 48px;
  border: 2px solid #000;
  border-radius: 4px;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0 16px;
    font-size: 20px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  svg {
    margin-right: 8px;
    color: #000;
  }
`;
