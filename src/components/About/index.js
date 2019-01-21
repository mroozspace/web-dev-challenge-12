import React from 'react';
import ImgSectionsContainer from './ImgSectionsContainer';
import ImgContainer from './ImgContainer';
import ImgSection from './ImgSection';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import Logo from '../Logo';
import Flex from '../Flex';
import ContactFooter from '../ContactFooter';
import AboutContainer from './AboutContainer';

export default function About() {
  return (
    <AboutContainer>
      <Flex justifyContent={ 'flex-start' }>
        <Logo colored />
      </Flex>
      <ImgSectionsContainer>
        <p>
          Hello, we are Zest. We help our clients to stand out, enable <br />
          them reach their communnication goals and make them like the digital
          word.
        </p>
        <ImgSection>
          <ImgContainer name='1'>
            <img src={ img1 } alt='1' />
            <p>women in chanel \ collector's edition</p>
          </ImgContainer>
          <ImgContainer name='2'>
            <img src={ img2 } alt='2' />
            <p>berluti \ at their feet</p>
          </ImgContainer>
        </ImgSection>
        <ImgSection>
          <ImgContainer name='3'>
            <img src={ img3 } alt='3' />
            <p>surf odyssey \ the culture of wave riding</p>
          </ImgContainer>
          <ImgContainer name='4'>
            <img src={ img4 } alt='4' />
            <p>
              issey miyake \ <br />
              the ultimate issey miyake monograph
            </p>
          </ImgContainer>
        </ImgSection>
        <ImgSection>
          <ImgContainer name='5'>
            <img src={ img5 } alt='5' />
            <p>a smile in the mind \ witty thinking in graphic design</p>
          </ImgContainer>
        </ImgSection>
        <ImgSection>
          <ImgContainer name='6'>
            <img src={ img6 } alt='6' />
            <p>crossing europe \ poike stomps</p>
          </ImgContainer>
          <ImgContainer name='7'>
            <img src={ img7 } alt='7' />
            <p>otherworldly \ avant-garde fashion and style</p>
          </ImgContainer>
        </ImgSection>
      </ImgSectionsContainer>
      <ContactFooter />
    </AboutContainer>
  );
}
