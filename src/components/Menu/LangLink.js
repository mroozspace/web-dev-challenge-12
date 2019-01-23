import styled from 'styled-components';
import StyledLink from '../StyledLink';

const LangLink = styled(StyledLink)`
  margin: 0 7px 0 0;
  font-size: 16px;
  font-weight: 900;

  &:nth-child(3) {
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: 12px;

    &:nth-child(3) {
      margin-top: 10px;
    }
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`

export default LangLink