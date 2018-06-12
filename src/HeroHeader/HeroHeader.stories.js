import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroHeader from '.'

storiesOf('HeroHeader', module) // eslint-disable-line no-undef
  .add('index', () => (
    <HeroHeader />
  ))
