import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  font-size: 11px;
  padding: 5px 0;

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${props => (props.color ? props.color : '#fff')};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    align-content: center;
    p {
      margin: 2px;
      text-align: center;
      width: 100%;
    }
  }
`;
export default Footer;
