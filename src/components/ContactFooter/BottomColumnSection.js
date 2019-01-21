import styled from 'styled-components';

const BottomColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;

  p {
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

export default BottomColumnSection