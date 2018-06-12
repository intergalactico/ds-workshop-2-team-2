import React from 'react'
import { string } from 'prop-types';

import * as s from './styles.js'

const Hero = (props) => {
  return (
    <s.Hero>
      <s.HeroHeader>{props.title}</s.HeroHeader>
      <s.HeroText>{props.text}</s.HeroText>
      <s.HeroButton onClick={props.onAction}>{props.action}</s.HeroButton>
    </s.Hero>
  )
}

Hero.propTypes = {
    title: string.isRequired,
    text: string.isRequired,
    action: string.isRequired,
    onAction: string.isRequired
};

export default Hero
