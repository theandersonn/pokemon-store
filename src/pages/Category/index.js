import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import { FiSearch } from 'react-icons/fi';
import { Header, Form, Content, ThemeColor } from './styles';
import logoImg from '../../assets/logo.svg';

import CardList from '../../components/CardList/';
import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';

const Category = () => {
  // parâmetro setado como categoria em Home/index
  const { params } = useRouteMatch();

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  // listar pokemon ao carregar a página
  useEffect(() => {
    getUrlPoke();
  }, []);

  // Faz a primeira requisição e pega as URLs
  async function getUrlPoke() {
    const response = await api.get(`type/${params.id}`);
    response.data.pokemon.map((responseItem) => {
      return getPoke(responseItem.pokemon.url);
    });
  }

  // Faz segunda requisição e com o id do Poke lista os demais atributos
  async function getPoke(pokeUrl) {
    const allContent = await api.get(pokeUrl);
    setPokemon((prevPoke) => [...prevPoke, allContent.data]);
  }

  // Montar Pokédex
  async function handleAddPoke(event) {
    event.preventDefault();

    const response = await api.get(`${search}`);
    const newItemPoke = response.data;
    setPokedex([...pokedex, newItemPoke]);
    setPokemon([]);
    setSearch('');
  }

  return (
    <>
      {params.id === '11' ? (
        <ThemeColor agua />
      ) : params.id === '10' ? (
        <ThemeColor fogo />
      ) : params.id === '16' ? (
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
          <CardList pokemon={pokemon} loading={!pokemon.length} />
        </div>

        <aside>
          <Cart pokemon={pokemon} />
        </aside>
      </Content>
      <Footer />
    </>
  );
};

export default Category;
