import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';

import Flex from './Flex';
import Footer from './Footer';

const BottomColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;

  p {
    color: #000;
    font-size: 19px;
    margin: 2px;

    &:first-child {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 600px) {
   p {
     &:first-child {
       margin-bottom: 10px;
     }
   }
  }
`;

export const ContactFooter = styled.div`
  margin-top: 11px;
  ${Flex} {
    ${Flex}:first-child {
      justify-content: flex-start;
      padding-bottom: 28px;
    }
  }
  ${Footer} {
    margin-top: 68px;
  }

  @media screen and (max-width: 1000px) {
    & > ${Flex} {
      flex-direction: column;
    }
    ${Flex} {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    ${Flex} {
      ${Flex}:nth-child(2) {
        flex-direction: column;
        align-items: flex-start;
        ${BottomColumnSection} {
          margin-bottom: 25px;
        }
      }
    }
  }
`

const ContactFooterHeaders = styled.h2`
  margin-left: 62px;
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  h2 { 
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-left: 50px;
  }
`

export default () => (
  <ContactFooter>
    <Flex>
      <Flex flex={ 2 }>
        <Logo gray/>
        <ContactFooterHeaders>
          <h2>Zest</h2>
          <h2>Le zeste</h2>
          <h2>La scorza</h2>
        </ContactFooterHeaders>
      </Flex>
      <Flex flex={ 3 } justifyContent={ 'space-between' }>
        <BottomColumnSection>
          <p>Address</p>
          <p>Rue Sainte</p>
          <p>Devote</p>
          <p>9800 Monaco</p>
        </BottomColumnSection>
        <BottomColumnSection>
          <p>Contact</p>
          <p>contact@randommail.com</p>
          <p>T / +377 00 00 00 00</p>
          <p>jobs@randommail.com</p>
        </BottomColumnSection>
        <BottomColumnSection>
          <p>Follow us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Google Plus</p>
        </BottomColumnSection>
      </Flex>
    </Flex>
    <Footer color={ '#000' }>
      <Flex flex={ 1 } />
      <Flex flex={ 1 }>
        <p>Copyright &copy; 2019 All rights reserved</p>
      </Flex>
      <Flex flex={ 1 } justifyContent={ 'flex-end' }>
        <p>Contact: contact@randommail.com</p>
      </Flex>
    </Footer>
  </ContactFooter>
);
