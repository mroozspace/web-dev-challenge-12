import React from 'react';
import styled, {keyframes, css} from 'styled-components';

import homeBg from '../assets/homeBg.jpg';
import homeBg1 from '../assets/homeBg1.jpg';
import homeBg2 from '../assets/homeBg2.jpg';
import homeBg3 from '../assets/homeBg3.jpg';
import Header from './Header';

const backgrounds = [homeBg, homeBg1, homeBg2, homeBg3];
const backgroundColors = ['#cc2b23', '#1c5238', '#95724c', '#7b6379'];

const slide = props => {
  const color = backgroundColors[props.index];
  return keyframes`
  40% {
    background-color: ${color};
  }
  60%{
    opacity: .95;
    left: 0vw;
  }
  96% {
    width: 100vw;
  }
  100% {
    width: 5vw;
    left: 99vw;
    background-color: ${color};
    opacity: .5;
  }
`;
};

const fadeInHeader = opacity => {
  return keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: ${opacity};
  }
`;
};

const sildeInOut = prev => {
  return keyframes`
  0% {
    margin-left: ${prev ? '100px;' : '-100px;'};
  }
  100% {
    margin-left: 0;
  }
`;
};

const HomeWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  background-size: cover;
  transition: background-image 500ms ease-in-out 1000ms,
    transform 300ms ease-in-out;
  background-image: ${props => `url(${backgrounds[props.index]})`};
  background-position: center;
  color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${props => props.theme.padding};
  overflow: hidden;
  ${props =>
    props.isMenuOpen &&
    `
    transform: translateX(50vw);

    @media screen and (max-width: 800px) {
      transform: translateX(80vw);
    }
  `}

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100vh;
    width: 0px;
    animation: ${slide} 1900ms ease-in-out 100ms
      ${props => props.prev && 'alternate-reverse'};
  }

  ${Header} {
    position: absolute;
    color: #fff;
    top: 41%;
    transform: translate(-50%, -50%);
    left: 30px;
    opacity: 0;
    animation: ${fadeInHeader(0.3)} 500ms 1500ms forwards,
      ${props =>
        css`
          ${sildeInOut(props.prev)} 300ms;
        `};

    :nth-child(2) {
      left: calc(100% + 50px);
      animation: ${fadeInHeader(0.3)} 400ms 1500ms forwards,
        ${props =>
          css`
            ${sildeInOut(props.prev)} 3000ms;
          `};
    }

    :nth-child(3) {
      left: 50%;
      animation: ${fadeInHeader(1)} 400ms 1500ms forwards,
        ${props =>
          css`
            ${sildeInOut(props.prev)} 3000ms;
          `};
    }
  }

  @media screen and (orientation: 'portrait') {
    background-size: contain;
  }
`;

export default props => <HomeWrapper { ...props } />;
