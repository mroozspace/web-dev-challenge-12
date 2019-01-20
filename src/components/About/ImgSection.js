import styled from 'styled-components';
import ImgContainer from './ImgContainer';

const ImgSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 25px auto;
  max-width: 1350px;
  p {
    text-transform: uppercase;
    margin-left: 0;
  }
  ${ImgContainer} {
    &:first-child {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    ${ImgContainer} {
      align-items: flex-start;
      &:nth-of-type(2) {
        align-items: flex-end;
      }
    }
  }
`;
export default ImgSection;
