import styled, {css} from 'styled-components';
import Footer from '../Footer';
import NavBar from '../NavBar';
import NavBarItem from '../NavBarItem';
import StyledLink from '../StyledLink';

const MenuContainer = styled.menu`
  position: absolute;
  left: 0;
  transform: scale(0.8);
  margin: 0;
  padding: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 68px 80px 24px 85px;
  transition: transform 600ms, opacity 150ms;
  opacity: 0;

  @media screen and (max-width: 1050px) {
    ${NavBar} {
      flex-direction: column;
      align-items: flex-start;
    }
    ${NavBarItem} {
      margin: 0;
    }
    padding-right: 60px;
  }

  @media screen and (max-width: 800px) {
    padding: 34px 40px 12px 42px;
  }

  @media screen and (max-width: 500px) {
    padding: 24px 50px 24px 12px;
  }

  ${StyledLink} {
    font-size: 16px;
    margin-right: 15px;
    &::before {
      background-color: #000000;
    }
  }

  ${Footer} {
    ${StyledLink} {
      margin-right: 25px;
    }
    @media screen and (max-width: 800px) {
      margin-right: 10px;
      &:nth-child(3) {
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      @media screen and (max-width: 800px) {
        width: 90vw;
      }
    `}
`;

export default MenuContainer;
