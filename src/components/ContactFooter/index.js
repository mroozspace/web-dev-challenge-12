import React from 'react';
import Logo from '../Logo';

import Flex from '../Flex';
import Footer from '../Footer';
import BottomColumnSection from './BottomColumnSection';
import ContactFooterHeaders from './ContactFooterHeaders';
import ContactFooterContainer from './ContactFooterContainer';

export default () => (
  <ContactFooterContainer>
    <Flex>
      <Flex flex={ 2 }>
        <Logo gray />
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
  </ContactFooterContainer>
);
