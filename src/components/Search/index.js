import React, { useState } from 'react';
import api from '../../services/api';

import { FiSearch } from 'react-icons/fi';

import { Form } from './styles';

const Search = ({ setPokemon }) => {
  const [search, setSearch] = useState([]);

  async function handleAddPoke(event) {
    event.preventDefault();

    try {
      if (search.length > 0) {
        const response = await api.get(`pokemon/${search.toLowerCase()}`);
        setPokemon([response.data]);
        setSearch('');
      }
    } catch (err) {
      alert(`${search} não consta na lista.`);
      setSearch('');
    }
  }

  return (
    <Form onSubmit={handleAddPoke}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Monte a sua Pokédex"
      />
      <FiSearch size={20} />
    </Form>
  );
};

export default Search;
