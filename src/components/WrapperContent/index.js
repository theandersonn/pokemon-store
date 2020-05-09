import React, { useState } from 'react';

import { Content, CartList, CardItem, CartPrice, CartTitle } from './styles';

import Button from '../Button';
import Loader from '../Loader';

const WrapperContent = ({ pokemon, loading }) => {
  const [product, setProduct] = useState([]);

  function addToCart(id, name, price) {
    const newProduct = { id: id, name: name, price: price };
    setProduct(() => [...product, newProduct]);
  }

  return (
    <>
      {loading && <Loader />}
      <Content>
        <div>
          {pokemon.slice(0, 12).map((poke) => (
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
              {
                <Button
                  onClick={() => addToCart(poke.id, poke.name, poke.weight)}
                  text={`Add Carrinho`}
                ></Button>
              }
            </CardItem>
          ))}
        </div>

        <aside>
          <CartTitle>Minha Pokédex</CartTitle>
          <CartList>
            {product.map((p) => (
              <li>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`}
                  alt={p.name}
                />
                <span>{p.name}</span>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(p.price)}
                </p>
              </li>
            ))}
          </CartList>

          <CartPrice>
            <h2>total</h2>

            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(
                product.reduce((prev, curr) => {
                  return prev + curr.price;
                }, 0),
              )}
            </p>
          </CartPrice>

          <Button text={`Finalizar`} />
        </aside>
      </Content>
    </>
  );
};

export default WrapperContent;
