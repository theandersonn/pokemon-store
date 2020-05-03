import React from 'react';

import { CardItem } from './styles';

import Button from '../Button';

import fogoGrowlithe from '../../assets/fogo-Growlithe.png';

const Card = () => {
  return (
    <CardItem>
      <img src={fogoGrowlithe} alt="Growlithe" />
      <h1>Growlithe</h1>
      <p>R$ 99,00</p>
      <Button />
    </CardItem>
  );
};

export default Card;
