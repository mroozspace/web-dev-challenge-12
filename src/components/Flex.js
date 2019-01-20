import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  align-self: ${props => props.alignSelf};
  justify-self: ${props => props.justifySelf};
  flex: ${props => props.flex};
  flex-basis: ${props => props.flexBasis};
`

Flex.defaultProps = {
  justifyContent: 'center',
  alignContent : 'center',
  alignItems: 'center',
  alignSelf: 'auto',
  justifySelf: 'auto',
  flexBasis: 'auto'
}

export default Flex