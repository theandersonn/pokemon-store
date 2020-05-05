import React from 'react';

import { CartList, CartPrice } from './styles';

import Button from '../Button';

import fogoGrowlithe from '../../assets/fogo-Growlithe.png';

const Cart = () => {
  return (
    <>
      <CartList>
        <li>
          <img src={fogoGrowlithe} alt="Growlithe" />
          <span>Growlithe</span>
          <p>R$ 99.99</p>
        </li>
      </CartList>

      <CartPrice>
        <h2>total</h2>
        <p>R$ 99.99</p>
      </CartPrice>

      <Button text={`Finalizar`} />
    </>
  );
};

export default Cart;
