import React, {Component} from 'react';
import ImgSectionsContainer from './ImgSectionsContainer';
import ImgContainer from './ImgContainer';
import ImgSection from './ImgSection';
import Logo from '../Logo';
import Flex from '../Flex';
import ContactFooter from '../ContactFooter';
import AboutContainer from './AboutContainer';
import imgSectionsData from './imgSectionsData';
import Img from '../Img';
import NavBar from '../NavBar';
import NavBarItem from '../NavBarItem';
import StyledLink from '../StyledLink';

export default class About extends Component {
  renderSections = () =>
    imgSectionsData.map(images => {
      return (
        <ImgSection key={ images[0].id }>
          {this.renderImgsInSection(images)}
        </ImgSection>
      );
    });

  renderImgsInSection = images =>
    images.map(img => {
      return (
        <ImgContainer name={ img.id } key={ img.id }>
          <Img src={ img.preloadedSrc } loadedSrc={ img.loadedSrc } alt={ img.id } />
          <p>{img.caption}</p>
        </ImgContainer>
      );
    });

  render() {
    return (
      <AboutContainer>
        <Flex justifyContent={ 'space-between' }>
          <Logo colored />
          <NavBar>
            <NavBarItem>
              <StyledLink underlineColor={ '#000' } to='/works'>
                Works
              </StyledLink>
            </NavBarItem>
            <NavBarItem>
              <StyledLink underlineColor={ '#000' } to='/about'>
                About
              </StyledLink>
            </NavBarItem>
            <NavBarItem>
              <StyledLink underlineColor={ '#000' } to='/'>
                Home
              </StyledLink>
            </NavBarItem>
          </NavBar>
        </Flex>
        <ImgSectionsContainer>
          <p>
            Hello, we are Zest. We help our clients to stand out, enable <br />
            them reach their communnication goals and make them like the digital
            word.
          </p>
          {this.renderSections()}
        </ImgSectionsContainer>
        <ContactFooter />
      </AboutContainer>
    );
  }
}
