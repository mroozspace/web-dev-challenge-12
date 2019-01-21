import styled from 'styled-components';
import Flex from '../Flex';

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

export default SliderContainer;
