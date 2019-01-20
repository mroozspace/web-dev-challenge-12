import React from 'react';
import Logo from '../Logo';

import styled from 'styled-components';
import Flex from '../Flex';
import ContactFooter, {ContactFooter as ContactFooterStyle} from '../ContactFooter';
import StyledLink from '../Link';
import Slider from './Slider';

const SideNav = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  width: 22.5%;
`

const WorksWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding};
  ${SideNav} h2 {
    text-transform: uppercase;
    font-size: 26px;
    margin-top: 46px;
    margin-bottom: 52px;
  }

  ${StyledLink} {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  ${ContactFooterStyle} {
    margin-top: 125px;
  }

  @media screen and (max-width: 950px) {
    ${ContactFooterStyle} {
      margin-top: 20px;
    }
    ${Flex}{
      &:nth-child(2) {
        flex-direction: column;
      }
    }
  }
`;

export default function About() {
  return (
    <WorksWrapper>
      <Flex justifyContent={ 'flex-start' } flexBasis={ '80px' }>
        <Logo colored />
      </Flex>
      <Flex justifyContent={ 'flex-start' }>
        <SideNav>
          <h2>Works</h2>
          <StyledLink to={ '#AllWorks' } underlineColor={ '#aaa' }>All Works</StyledLink>
          <StyledLink to={ '#Creative' } underlineColor={ '#aaa' }>Creative</StyledLink>
          <StyledLink to={ '#Illustrations' } underlineColor={ '#aaa' }>Illustrations</StyledLink>
          <StyledLink to={ '#Photography' } underlineColor={ '#aaa' }>Photography</StyledLink>
          <StyledLink to={ '#Luxury' } underlineColor={ '#aaa' }>Luxury</StyledLink>
          <StyledLink to={ '#Calendars' } underlineColor={ '#aaa' }>Calendars</StyledLink>
        </SideNav>
        <Slider />
      </Flex>
      <ContactFooter />
    </WorksWrapper>
  );
}