import React, {Component} from 'react';
import styled from 'styled-components';
import Flex from '../Flex';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';

import Btn from '../Btn';

const SliderContainer = styled(Flex)`
  max-height: 100%;
  max-width: 100%;

  padding: 52px 0;

  img {
    height: 472px;
    width: 315px;
    object-fit: cover;
  }

  ${Flex} {
    &:nth-child(2) {
      font-size: 12px;
      margin-bottom: -2px;
      padding-right: 3px;
    }
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;

    ${Flex} {
      flex-direction: column;
    }
  }
`;

const SliderBtnContainer = styled.div`
  margin-top: 10px;
  flex: 0;
  align-self: flex-end;
  flex-direction: row;
`

export default class Slider extends Component {
  state = {
    pics: [img1, img2, img3, img4, img5, img6],
    firstPicIndex: 0,
    secondPicIndex: 1
  };

  handleSlideChange = (next) => {
    const {pics} = this.state
    let firstPicIndex = (this.state.firstPicIndex + (next ? 1 : -1)) % pics.length
    let secondPicIndex = (this.state.secondPicIndex + (next ? 1 : -1)) % pics.length
    firstPicIndex =  (firstPicIndex < 0 ) ? pics.length - 1 : firstPicIndex
    secondPicIndex = (secondPicIndex < 0 ) ? pics.length - 1 : secondPicIndex
    this.setState({
      firstPicIndex,
      secondPicIndex
    })
  }

  render() {
    const {pics, firstPicIndex, secondPicIndex} = this.state
    return (
      <SliderContainer flex={ 1 }>
        <Flex flex={ 1 } justifyContent={ 'space-around' }>
          <img src={ pics[firstPicIndex] } alt="1" />
          <img src={ pics[secondPicIndex] } alt="2" />
        </Flex>
        <SliderBtnContainer>
          <Btn onClick={ () => this.handleSlideChange() }>Preview</Btn>/
          <Btn onClick={ () => this.handleSlideChange(true) }>Next</Btn>
        </SliderBtnContainer>
      </SliderContainer>
    );
  }
}
