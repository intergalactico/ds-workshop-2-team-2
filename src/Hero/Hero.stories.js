import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'

const action = () => {
    console.log("Action!");
}

storiesOf('Hero', module)
  .add('index', () => (
    <Hero title="Design Systems Conference"
        text="Hello world lorem los impsum's"
        action="Event info"
        onAction={action}/>
  ))
