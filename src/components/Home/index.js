import React, {Component} from 'react';
import Logo from '../Logo';
import NavBarItem from '../NavBarItem';
import NavBar from '../NavBar';
import HomeContainer from './HomeContainer';
import CarouselNavContainer from './CarouselNavContainer';
import Burger from '../Burger';
import homeBg from '../../assets/homeBg.jpg';
import Flex from '../Flex';
import Footer from '../Footer';
import Menu from '../Menu';
import StyledLink from '../StyledLink';
import Header from './Header';
import Btn from '../Btn';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 0,
      isMenuOpen: false,
      prev: false,
      transitioning: false,
      headers: ['Tender', 'Zephirest', 'Evangelist', 'Superstition']
    };
    this.timeouts = [];
  }

  componentDidMount = () => {
    this.sliderInterval = setInterval(() => {
      this.handleSlideChange('next');
    }, 6000);
    this.timeouts[0] = setTimeout(() => {
      this.setState({transitioning: false});
    }, 3000);
  };

  componentWillUnmount = () => {
    clearInterval(this.sliderInterval);
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  };

  toggleMenu = () => this.setState({isMenuOpen: !this.state.isMenuOpen});

  handleSlideChange = dir => {
    let {sliderIndex, headers} = this.state;
    let nextIndex, prev, newHeaders;
    if (dir === 'next') {
      nextIndex = ++sliderIndex % 4;
      prev = false;
      newHeaders = [].concat(headers.slice(1, headers.length), headers[0]);
    } else {
      sliderIndex === 0 ? (nextIndex = 3) : (nextIndex = --sliderIndex % 4);
      prev = true;
      newHeaders = [].concat(
        headers[headers.length - 1],
        headers.slice(0, headers.length - 1)
      );
    }
    this.setState({
      sliderIndex: nextIndex,
      prev,
      transitioning: true
    });
    this.timeouts[1] = setTimeout(() => {
      this.setState({
        headers: newHeaders
      });
    }, 1000);
    this.timeouts[2] = setTimeout(() => {
      this.setState({
        transitioning: false
      });
    }, 3000);
  };

  render() {
    const {isMenuOpen, headers} = this.state;

    return (
      <Flex style={ {height: '100vh', overflow: 'hidden'} }>
        <Menu isOpen={ isMenuOpen } toggleMenu={ this.toggleMenu } />
        <HomeContainer
          transitioning={ this.state.transitioning }
          bg={ homeBg }
          index={ this.state.sliderIndex }
          prev={ this.state.prev }
          isMenuOpen={ this.state.isMenuOpen }
        >
          <Flex justifyContent={ 'space-between' } alignItems={ 'flex-start' }>
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

          <Header>{headers[0]}</Header>
          <Header>The {headers[1]}</Header>
          <Header>{headers[2]}</Header>

          <Flex
            column
            justifyContent={ 'flex-end' }
            alignSelf={ 'stretch' }
            alignItems={ 'flex-end' }
            flex={ '1 0' }
          >
            <CarouselNavContainer>
              <Btn onClick={ () => this.handleSlideChange() }>Preview</Btn>/
              <Btn onClick={ () => this.handleSlideChange('next') }>Next</Btn>
            </CarouselNavContainer>
            <Footer>
              <p>
                Made by <a href={ 'https://github.com/mroozspace' }>mrooz</a>
              </p>
              <p>
                Contact:{' '}
                <a href={ 'mailto:contact@randommail.com' }>
                  contact@randommail.com
                </a>
              </p>
            </Footer>
          </Flex>
        </HomeContainer>
      </Flex>
    );
  }
}
