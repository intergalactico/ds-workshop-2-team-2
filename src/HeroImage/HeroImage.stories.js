import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroImage from '.'

storiesOf('HeroImage', module) // eslint-disable-line no-undef
  .add('index', () => (
    <HeroImage />
  ))
