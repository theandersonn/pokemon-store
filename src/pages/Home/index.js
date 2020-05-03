import React from 'react';

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
          <ThemeCardItem>
            <img src={aguaPoliwhirl} alt="Poliwhirl" />
            <button>Pokemon do tipo água</button>
          </ThemeCardItem>

          <ThemeCardItem>
            <img src={fogoGrowlithe} alt="Growlithe" />
            <button>Pokemon do tipo fogo</button>
          </ThemeCardItem>

          <ThemeCardItem>
            <img src={dragaoDeino} alt="Deino" />
            <button>Pokemon do tipo dragão</button>
          </ThemeCardItem>
        </ThemeCard>
      </div>
    </Wrapper>
  );
};

export default Home;
