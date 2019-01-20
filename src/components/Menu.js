import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Footer from './Footer';
import NavBar from './NavBar';
import NavBarItem from './NavBarItem';
import menuBg from '../assets/menuBg.jpg';
import StyledLink from './Link';

const Menu = styled.menu`
  position: absolute;
  left: 0;
  transform: scale(0.8);
  margin: 0;
  padding: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 68px 80px 24px 85px;
  transition: transform 600ms, opacity 150ms;
  opacity: 0;

  
  @media screen and (max-width: 1050px) {
    ${NavBar} {
      flex-direction: column;
      align-items: flex-start;
    }
    ${NavBarItem} {
      margin: 0;
    }
    padding-right: 60px;
  }

  @media screen and (max-width: 800px) {
    padding: 34px 40px 12px 42px;
  }

  @media screen and (max-width: 500px) {
    padding: 24px 50px 24px 12px;
  }

  ${StyledLink} {
    font-size: 16px;
    margin-right: 15px;
    &::before {
      background-color: #000000;
    }
  }

  ${Footer} {
    ${StyledLink} {
      margin-right: 25px;
    }
    @media screen and (max-width: 800px) {
    margin-right: 10px;
    &:nth-child(3) {
        font-size: 12px; 
        margin-right: 10px;
      }
    }
  }

  ${props =>
    props.isOpen &&
    `
    opacity: 1;
    transform: scale(1);
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  `}
`;

const LangLink = styled(StyledLink)`
  margin: 0 7px 0 0;
  font-size: 16px;
  font-weight: 900;

  &:nth-child(3) {
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: 12px;

    &:nth-child(3) {
      margin-top: 10px;
    }
  }
`

const MenuBg = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 70px;
  @media screen and (max-width: 1200px) {
    max-height: 50vh;
    margin-bottom: 8vh;
  }
`;

export default props => (
  <Menu { ...props }>
    <NavBar style={ {width: '100%', justifyContent: 'space-between'} }>
      <Flex justifyContent={ 'flex-start' }>
        <NavBarItem >
          <StyledLink to='/works'>Works</StyledLink>
        </NavBarItem>
        <NavBarItem>
          <StyledLink to='/about'>About</StyledLink>
        </NavBarItem>
        <NavBarItem onClick={ props.toggleMenu }>
          <StyledLink to={ '' }>Close</StyledLink>
        </NavBarItem>
      </Flex>
      <Flex>
        <LangLink to='#EN'>EN</LangLink>
        <LangLink to='#FR'>FR</LangLink>
        <LangLink to='#IT'>IT</LangLink>
      </Flex>
    </NavBar>
    <Flex flex={ 1 } justifyContent={ 'flex-start' }>
      <MenuBg src={ menuBg } />
    </Flex>
    <Footer color={ '#000' } style={ {justifyContent: 'flex-start'} }>
      <StyledLink to='#facebook'>Facebook</StyledLink>
      <StyledLink to='#Twitter'>Twitter</StyledLink>
      <StyledLink to='#GooglePlus'>Google Plus</StyledLink>
    </Footer>
  </Menu>
);
