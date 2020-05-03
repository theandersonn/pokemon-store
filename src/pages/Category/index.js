import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Header, Content } from './styles';

import Search from '../../components/Search';
import Card from '../../components/Card/';
import Cart from '../../components/Cart/';
import Footer from '../../components/Footer';

const Category = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="Pokemon Store" />
        <Search />
      </Header>

      <Content>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
