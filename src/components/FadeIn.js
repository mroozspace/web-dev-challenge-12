import React, {Component} from 'react';
import styled, {keyframes, css} from 'styled-components';

const fadeIn = opacity => keyframes`
  0%{ 
    opacity: 0;
  }
  100% {
    opacity: ${opacity};
  }
`;

const FadeIn = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  ${({opacity, transition, delay}) => css`
    animation: ${fadeIn(opacity)} ${transition} ${delay} forwards;
  `};
`;

export default WrappedComponent => {
  return class FadeInContainer extends Component {
    state = {opacity: 0};
    componentDidMount = () => {
      const {opacity, transition, delay} = this.props;
      this.setState({opacity, transition, delay});
    };

    componentDidUpdate = (prevProps, prevState) => {
      if (prevProps.location.pathname !== this.props.location.pathname) {
        this.setState({opacity: 0});

        const {opacity, transition, delay} = this.props;
        this.setState({opacity, transition, delay});
      }
    };

    render() {
      const {opacity, transition, delay} = this.state;

      return (
        <FadeIn opacity={ opacity } transition={ transition } delay={ delay }>
          <WrappedComponent { ...this.props } />
        </FadeIn>
      );
    }
  };
};

FadeIn.defaultProps = {
  opacity: 1,
  transition: '300ms',
  delay: '100ms'
};
