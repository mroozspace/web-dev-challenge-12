import styled from 'styled-components';
import Flex from '../Flex';
import ContactFooterContainer from '../ContactFooter/ContactFooterContainer';
import StyledLink from '../StyledLink';
import SideNav from './SideNav';

const WorksContainer = styled.main`
display: flex;
flex-direction: column;
padding: ${props => props.theme.padding};
${SideNav} h2 {
  text-transform: uppercase;
  font-size: 26px;
  margin-top: 46px;
  margin-bottom: 52px;
}

${StyledLink} {
  text-transform: uppercase;
  margin-bottom: 20px;
}

${ContactFooterContainer} {
  margin-top: 125px;
}

@media screen and (max-width: 950px) {
  ${ContactFooterContainer} {
    margin-top: 20px;
  }
  ${Flex}{
    &:nth-child(2) {
      flex-direction: column;
    }
  }
}
`;

export default WorksContainer