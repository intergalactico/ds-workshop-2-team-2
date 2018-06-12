import React from 'react'
import { node, arrayOf, string, bool } from 'prop-types';

import * as s from './styles.js'

const Navigation = ({children, logo, background, fixed}) => {
  return (
    <s.Navigation background={background} fixed={fixed}>
        <img src={logo} style={{height: '50px' }} />
        <s.NavigationButtons>
            { children }
        </s.NavigationButtons>
    </s.Navigation>
  )
}

Navigation.propTypes = {
    logo: string,
    children: arrayOf(node),
    background: string,
    fixed: bool
};

export default Navigation
