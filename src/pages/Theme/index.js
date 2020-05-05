import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, Form, Content, CardItem, ThemeColor } from './styles';

// import Search from '../../components/Search';
import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import api from '../../services/api';

const Theme = () => {
  const { params } = useRouteMatch();
  const themeColor = params.theme;
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  // listar pokemon ao carregar a página
  useEffect(() => {
    api.get(`?limit=9`).then((response) => {
      setPokemon(response.data.results);
    });
  }, []);

  // Montar Pokédex
  async function handleAddPoke(event) {
    event.preventDefault();

    const response = await api.get(`${search}`);
    const newItemPoke = response.data;
    console.log(response.data);
    setPokedex([...pokedex, newItemPoke]);
    setPokemon([]);
    setSearch('');
  }

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
        <Link to="/">
          <img src={logoImg} alt="Pokemon Store" />
        </Link>

        <Form onSubmit={handleAddPoke}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Monte a sua Pokédex"
          />
          <FiSearch size={20} />
        </Form>
      </Header>
      <Content>
        <div>
          {/* Esse componente é renderizado ao carregar a página */}
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
              <Button text={`Add Carrinho`}></Button>
            </CardItem>
          ))}

          {/* Esse componente será renderizado quando a variavel pokedex for preenchida */}
          {pokedex.map((pokeItem) => (
            <CardItem key={pokeItem.order}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokeItem.id}.png`}
                alt={pokeItem.name}
              />
              <h1>{pokeItem.name}</h1>
              <p>R$ {(pokeItem.weight = Math.floor(Math.random() * 999))}</p>
              <Button text={`Add Carrinho`}></Button>
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
