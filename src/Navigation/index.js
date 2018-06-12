import React from 'react'
import { node, arrayOf, string } from 'prop-types';

import * as s from './styles.js'

const Navigation = ({children, logo}) => {
  return (
    <s.Navigation>
        <img src={logo} style={{height: '50px' }} />
        <s.NavigationButtons>
            { children }
        </s.NavigationButtons>
    </s.Navigation>
  )
}

Navigation.propTypes = {
    logo: string,
    children: arrayOf(node)
};

export default Navigation
