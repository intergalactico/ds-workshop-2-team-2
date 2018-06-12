import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

import Hero from '.'

const action = () => {
    console.log("Action!");
}

storiesOf('Hero', module)
  .add('index',
       withInfo(`
Hero component for our lovely design system`)(() => (
    <Hero title="Design Systems Conference"
        text="Hello world lorem los impsum's"
        action="Event info"
        background='/assets/dsconf-wide.jpg'
        onAction={action}/>
  )));
