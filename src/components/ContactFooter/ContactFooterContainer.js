import styled from 'styled-components';
import Flex from '../Flex';
import Footer from '../Footer';
import BottomColumnSection from './BottomColumnSection'

const ContactFooterContainer = styled.div`
margin-top: 11px;
${Flex} {
  ${Flex}:first-child {
    justify-content: flex-start;
    padding-bottom: 28px;
  }
}
${Footer} {
  margin-top: 68px;
}

@media screen and (max-width: 1000px) {
  & > ${Flex} {
    flex-direction: column;
  }
  ${Flex} {
    width: 100%;
    ${Flex}:nth-child(2) {
      flex-direction: column;
      align-items: flex-start;
      ${BottomColumnSection} {
        margin-bottom: 25px;
      }
    }
  }
}
`

export default ContactFooterContainer