import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, Content, CardItem, ThemeColor } from './styles';

import Search from '../../components/Search';
import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import api from '../../services/api';

const Theme = () => {
  const { params } = useRouteMatch();
  const [pokemon, setPokemon] = useState([]);
  const themeColor = params.theme;

  useEffect(() => {
    api.get('?limit=9').then((response) => {
      setPokemon(response.data.results);
    });
  }, []);

  return (
    <>
      {themeColor === 'agua' ? (
        <ThemeColor agua />
      ) : themeColor === 'fogo' ? (
        <ThemeColor fogo />
      ) : themeColor === 'dragao' ? (
        <ThemeColor dragao />
      ) : (
        <ThemeColor />
      )}

      <Header>
        <Link to={`/`}>
          <img src={logoImg} alt="Pokemon Store" />
        </Link>
        <Search />
      </Header>
      <Content>
        <div>
          {pokemon.map((poke, id) => (
            <CardItem key={id}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${
                  id + 1
                }.png`}
                alt={poke.name}
              />
              <h1>{poke.name}</h1>
              <Button text={`Add Carrinho`}>
                R$ {(id = Math.floor(Math.random() * 999))}
              </Button>
            </CardItem>
          ))}
        </div>

        <aside>
          <h1>Carrinho</h1>
          <Cart />
        </aside>
      </Content>
      <Footer />
    </>
  );
};

export default Theme;
