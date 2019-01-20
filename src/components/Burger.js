import React from 'react';
import styled from 'styled-components';

const Stripe = styled.div`
  background-color: #fff;
  height: 1px;
  width: 15px;
  margin: 3px;
  margin-right: 5px;
  transition: all 200ms ease-in;

  &:nth-child(2) {
    transform: translateX(3px);
  }

  ${props =>
    props.menuActive
      ? `
      &:first-child {
        transform: translateY(-5px);
        opacity: 0;
      }
      &:nth-child(2) {
        transform: translateX(-5px);
      }
      &:nth-child(3) {
        transform: translateY(5px);
        opacity: 0;
      }`
      : null}
`;

export default props => (
  <div style={ {marginRight: 3} }>
    <Stripe menuActive={ props.menuActive } />
    <Stripe menuActive={ props.menuActive } />
    <Stripe menuActive={ props.menuActive } />
  </div>
);
