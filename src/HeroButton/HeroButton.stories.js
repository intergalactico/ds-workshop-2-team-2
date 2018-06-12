import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroButton from '.'

storiesOf('HeroButton', module) // eslint-disable-line no-undef
  .add('index', () => (
    <HeroButton />
  ))
