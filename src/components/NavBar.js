import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  margin: 0;
  padding: 0;
  padding-right: 20px;
  padding-inline-end: 0;

  @media (max-width: 2000px) {
    width: 255px;
  }
  ${props => props.color && `color: ${props.color}`}
`;

export default NavBar;
