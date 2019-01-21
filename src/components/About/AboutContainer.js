import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding};
  overflow: hidden;
`;

export default AboutContainer;
