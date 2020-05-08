import React from 'react';

import { CardItem } from './styles';

import Button from '../Button';

const CardList = ({ pokemon, loading }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {pokemon.slice(0, 9).map((poke) => (
        <CardItem key={poke.order}>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}
            alt={poke.name}
          />
          <h1>{poke.name}</h1>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(poke.weight)}
          </p>
          <Button
            id={poke.id}
            name={poke.name}
            price={poke.weight}
            text={`Add Carrinho`}
          ></Button>
        </CardItem>
      ))}
    </>
  );
};

export default CardList;
