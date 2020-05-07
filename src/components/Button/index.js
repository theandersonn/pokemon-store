import React, { useState } from 'react';

import { ButtonElement } from './styles';

const Button = ({ text, id, name, price }) => {
  const [product, setProduct] = useState([]);

  function addToCart() {
    const newProduct = [id, name, price];
    setProduct([...product, newProduct]);
    console.log(product);
  }

  return (
    <ButtonElement onClick={() => addToCart(id, name, price)}>
      {text}
    </ButtonElement>
  );
};

export default Button;
