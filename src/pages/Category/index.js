import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import { Header, ThemeColor } from './styles';
import logoImg from '../../assets/logo.svg';

import Search from '../../components/Search';
import WrapperContent from '../../components/WrapperContent';
import Footer from '../../components/Footer';

const Category = ({ product }) => {
  // parâmetro setado como categoria em Home/index
  const { params } = useRouteMatch();

  const [pokemon, setPokemon] = useState([]);

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

        <Search setPokemon={setPokemon} />
      </Header>

      <WrapperContent pokemon={pokemon} />
      <Footer />
    </>
  );
};

export default Category;
