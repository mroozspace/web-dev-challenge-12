import React from 'react';
import Flex from '../Flex';
import Footer from '../Footer';
import NavBar from '../NavBar';
import NavBarItem from '../NavBarItem';
import menuBg from '../../assets/menuBg.jpg';
import StyledLink from '../StyledLink';
import MenuContainer from './MenuContainer'
import LangLink from './LangLink'
import MenuBg from './MenuBg'

const Menu = props => (
  <MenuContainer { ...props }>
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
  </MenuContainer>
);

export default Menu