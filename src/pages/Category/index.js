import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, Form, Content, CardItem, ThemeColor } from './styles';

import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import api from '../../services/api';

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

  // Adiciona item ao carrinho
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
          {/* Esse componente é renderizado ao carregar a página */}
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

          {/* Esse componente será renderizado quando a variavel pokedex for preenchida */}
          {/* {pokedex.map((pokeItem) => (
            <CardItem key={pokeItem.order}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokeItem.id}.png`}
                alt={pokeItem.name}
              />
              <h1>{pokeItem.name}</h1>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(pokeItem.weight)}
              </p>
              <Button text={`Add Carrinho`}></Button>
            </CardItem>
          ))} */}
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
