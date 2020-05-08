import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import aguaPoliwhirl from '../../assets/agua-Poliwhirl.png';
import fogoGrowlithe from '../../assets/fogo-Growlithe.png';
import dragaoDeino from '../../assets/dragao-Deino.png';

import { Wrapper, ThemeCard, ThemeCardItem } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <div>
        <img src={logoImg} alt="Pokemon Store" />

        <ThemeCard>
          <ThemeCardItem water>
            <img src={aguaPoliwhirl} alt="Poliwhirl" />
            <Link to="category/11">Tipo Água</Link>
          </ThemeCardItem>

          <ThemeCardItem fire>
            <img src={fogoGrowlithe} alt="Growlithe" />
            <Link to="category/10">Tipo Fogo</Link>
          </ThemeCardItem>

          <ThemeCardItem dragon>
            <img src={dragaoDeino} alt="Deino" />
            <Link to="category/16">Tipo Dragão</Link>
          </ThemeCardItem>
        </ThemeCard>
      </div>
    </Wrapper>
  );
};

export default Home;
