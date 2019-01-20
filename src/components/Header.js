import styled from 'styled-components';

const Header = styled.h1`
  font-size: 82px;
  letter-spacing: 4px;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 62px;
  }
  @media (max-width: 870px) {
    font-size: 42px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`

export default Header