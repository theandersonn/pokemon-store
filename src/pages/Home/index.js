import React from 'react';

import { Link } from 'react-router-dom';

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
            <Link to={`category/${11}`}>agua</Link>
          </ThemeCardItem>

          <ThemeCardItem fire>
            <img src={fogoGrowlithe} alt="Growlithe" />
            <Button />
            <Link to={`category/${10}`}>fogo</Link>
          </ThemeCardItem>

          <ThemeCardItem dragon>
            <img src={dragaoDeino} alt="Deino" />
            <Button />
            <Link to={`category/${16}`}>dragão</Link>
          </ThemeCardItem>
        </ThemeCard>
      </div>
    </Wrapper>
  );
};

export default Home;
