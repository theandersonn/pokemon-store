import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, Content, CardItem } from './styles';

import Search from '../../components/Search';
import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';

// import api from '../../services/api';
import axios from 'axios';

const Category = () => {
  // const { params } = useRouteMatch();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=9').then((res) => {
      console.log(res.data.results);
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <>
      <Header>
        <Link to={`/`}>
          <img src={logoImg} alt="Pokemon Store" />
        </Link>
        <Search />
      </Header>

      {/* {params.id} */}

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
              <p>R$ {(id = Math.floor(Math.random() * 999))}</p>
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

export default Category;
