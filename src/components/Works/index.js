import React from 'react';
import Logo from '../Logo';
import Flex from '../Flex';
import WorksContainer from './WorksContainer';
import StyledLink from '../StyledLink';
import Slider from './Slider';
import ContactFooter from '../ContactFooter';
import SideNav from './SideNav';

export default function About() {
  return (
    <WorksContainer>
      <Flex justifyContent={ 'flex-start' } flexBasis={ '80px' }>
        <Logo colored />
      </Flex>
      <Flex justifyContent={ 'flex-start' }>
        <SideNav>
          <h2>Works</h2>
          <StyledLink to={ '#AllWorks' } underlineColor={ '#aaa' }>
            All Works
          </StyledLink>
          <StyledLink to={ '#Creative' } underlineColor={ '#aaa' }>
            Creative
          </StyledLink>
          <StyledLink to={ '#Illustrations' } underlineColor={ '#aaa' }>
            Illustrations
          </StyledLink>
          <StyledLink to={ '#Photography' } underlineColor={ '#aaa' }>
            Photography
          </StyledLink>
          <StyledLink to={ '#Luxury' } underlineColor={ '#aaa' }>
            Luxury
          </StyledLink>
          <StyledLink to={ '#Calendars' } underlineColor={ '#aaa' }>
            Calendars
          </StyledLink>
        </SideNav>
        <Slider />
      </Flex>
      <ContactFooter />
    </WorksContainer>
  );
}
