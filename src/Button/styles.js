/*
 * All the button components are using the same styled-component. There is only
 * one file with styles (this one) which is imported into all the button components.
 */

import styled, { css } from 'styled-components';
import { isCircular } from 'styled-utils';

/*
 * In styled-components, you can define functions that output
 * CSS properties. This functions can be called from inside the
 * element declarations.
 */
const isIcon = ({ isIcon }) => {
  if (!isIcon) return;
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `;
};

const borderRadiusFromSize = (sz) => {
    let [_, size, unit] = sz.match(/^([\d\.]+)(\w+)$/);
    return parseFloat(size) * 2 + unit;
};

/* Default styles for all the buttons */
export const Button = styled.div`
  font-family: lato;
  font-weight: 400;
  height: 2.40em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  cursor: pointer;
  outline: none;
  border: 2px solid;
  border-radius: ${p => borderRadiusFromSize(p.size ? p.size : '1rem')};
  border-color: ${p => p.color};
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  color: ${p => p.color};
  font-size: ${p => p.size ? p.size : '1rem'};
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => p.size ? p.size : '1rem'};
  }
  ${isIcon}
  ${isCircular}
`;

export const ButtonLink = Button.withComponent('a').extend`
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`;
