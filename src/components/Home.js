import React, {Component} from 'react';
import Logo from './Logo';
import NavBarItem from './NavBarItem';
import NavBar from './NavBar';
import HomeWrapper from './HomeWrapper';
import styled from 'styled-components'
import Burger from './Burger';
import homeBg from '../assets/homeBg.jpg'
import Flex from './Flex';
import Footer from './Footer';
import Menu from './Menu.js';
import StyledLink from './Link';
import Header from './Header';
import Btn from './Btn';

export const SliderNavContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 12px;
  cursor: pointer;
`

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderIndex: 0,
      isMenuOpen: false,
      prev: false,
      headers: [
        'Tender',
        'Zephirest',
        'Evangelist',
        'Superstition',
      ]
    }
  }

  componentDidMount = () => {
    // this.sliderInterval = setInterval(() => {
    //   this.handleSlideChange('next')
    // }, 6000);
  }

  componentWillUnmount = () => {
    // clearInterval(this.sliderInterval)
  }
  
  toggleMenu = () => this.setState({isMenuOpen: !this.state.isMenuOpen})

  handleSlideChange = dir => {
    let {sliderIndex, headers} = this.state
    let nextIndex, prev, newHeaders
    if (dir === 'next') {
      nextIndex = ++sliderIndex % 4
      prev = false
      newHeaders = [].concat(headers.slice(1, headers.length), headers[0])
    } else {
      sliderIndex === 0 ?
      nextIndex = 3 :
      nextIndex = --sliderIndex % 4
      prev = true
      newHeaders = [].concat(headers[headers.length-1], headers.slice(0, headers.length-1))
    }
    this.setState({ 
      sliderIndex: nextIndex,
      prev,
      headers: newHeaders
    })
  }

  render() {
    const {isMenuOpen, headers} = this.state
    console.log(this.state)
    return (
      <Flex style={ {height: '100vh', overflow: 'hidden'} }>
        <Menu isOpen={ isMenuOpen } toggleMenu={ this.toggleMenu }/>
        <HomeWrapper 
        bg={ homeBg } 
        index={ this.state.sliderIndex } 
        prev={ this.state.prev }
        isMenuOpen={ this.state.isMenuOpen }>
          <Flex 
          justifyContent={ 'space-between' } 
          alignItems={ 'flex-start' }>
            <Logo />
            <NavBar>
              <NavBarItem>
                <StyledLink to='/works'>Works</StyledLink>
              </NavBarItem>
              <NavBarItem>
                <StyledLink to='/about'>About</StyledLink>
              </NavBarItem>
              <NavBarItem onClick={ this.toggleMenu }>
                <Burger isMenuOpen={ this.state.isMenuOpen } />
                Menu
              </NavBarItem>
            </NavBar>
          </Flex>

          <Header transitioning>{headers[0]}</Header>
          <Header transitioning>The {headers[1]}</Header>
          <Header transitioning>{headers[2]}</Header>

          <Flex 
          column 
          justifyContent={ 'flex-end' } 
          alignSelf={ 'stretch' } 
          alignItems={ 'flex-end' }
          flex={ '1 0' }>

            <SliderNavContainer>
              <Btn 
              onClick={ () => this.handleSlideChange() }>
              Preview
              </Btn>
            /
              <Btn onClick={ () => this.handleSlideChange('next') }>
              Next
              </Btn>
            </SliderNavContainer>
            <Footer>
              <p>Made by{' '}
                <a href={ 'https://github.com/mroozspace' }>
                mrooz
                </a>
              </p>
              <p>Contact:{' '}
                <a href={ 'mailto:contact@randommail.com' }>
                contact@randommail.com
                </a>
              </p>
            </Footer>
          </Flex>
        </HomeWrapper>
      </Flex>
    );
  }
}
