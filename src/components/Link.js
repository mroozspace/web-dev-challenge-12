import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  font-size: 12px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 300ms ease-in;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    height: 1px;
    width: 0px;
    background-color: ${props => props.underlineColor};
    transition: all 300ms;
  }

  &:hover {
    &::before {
      content: '';
      width: 100%;
    }
  }
`
StyledLink.defaultProps = {
  underlineColor: '#ffffff'
}

export default StyledLink