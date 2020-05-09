import React, { useState } from 'react';

import { CardItem } from './styles';

// import Button from '../Button';

const CardList = ({ pokemon, loading }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return <></>;
};

export default CardList;
