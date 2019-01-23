import styled from 'styled-components';

const Btn = styled.a`
  text-decoration: none;
  margin: 0 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

export default Btn;
