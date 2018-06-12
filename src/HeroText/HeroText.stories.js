import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroText from '.'

storiesOf('HeroText', module) // eslint-disable-line no-undef
  .add('index', () => (
    <HeroText />
  ))
