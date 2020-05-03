import React from 'react';

import logoImg from '../../assets/logo.svg';
import aguaPoliwhirl from '../../assets/agua-Poliwhirl.png';
import fogoGrowlithe from '../../assets/fogo-Growlithe.png';
import dragaoDeino from '../../assets/dragao-Deino.png';

import { Wrapper, ThemeCard, ThemeCardItem } from './styles';

import Button from '../../components/Button';

const Home = () => {
  return (
    <Wrapper>
      <div>
        <img src={logoImg} alt="Pokemon Store" />

        <ThemeCard>
          <ThemeCardItem watter>
            <img src={aguaPoliwhirl} alt="Poliwhirl" />
            <Button />
          </ThemeCardItem>

          <ThemeCardItem fire>
            <img src={fogoGrowlithe} alt="Growlithe" />
            <Button />
          </ThemeCardItem>

          <ThemeCardItem dragon>
            <img src={dragaoDeino} alt="Deino" />
            <Button />
          </ThemeCardItem>
        </ThemeCard>
      </div>
    </Wrapper>
  );
};

export default Home;
