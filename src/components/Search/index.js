import React from 'react';

import { WrapperSearch } from './styles';

import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <WrapperSearch>
      <input
        type="search"
        name="search"
        placeholder="Digite o nome do Pokémon"
      />
      <FiSearch size={20} />
    </WrapperSearch>
  );
};

export default Search;
