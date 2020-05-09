import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import { FiSearch } from 'react-icons/fi';
import { Header, Form, ThemeColor } from './styles';
import logoImg from '../../assets/logo.svg';

import WrapperContent from '../../components/WrapperContent';
import Footer from '../../components/Footer';

const Category = ({ product }) => {
  // parâmetro setado como categoria em Home/index
  const { params } = useRouteMatch();

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState([]);

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

    try {
      if (search.length > 0) {
        const response = await api.get(`pokemon/${search}`);
        setPokemon([response.data]);
        setSearch('');
      }
    } catch (err) {
      alert(`${search} não consta na lista.`);
      setSearch('');
    }
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

      <WrapperContent pokemon={pokemon} />
      <Footer />
    </>
  );
};

export default Category;
