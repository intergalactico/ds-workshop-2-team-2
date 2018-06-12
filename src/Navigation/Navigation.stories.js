import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import Button from '../Button';

import Navigation from '.'

storiesOf('Navigation', module)
  .add('index',
    withInfo('Navigation component. Such nice')
    (() =>
        <Navigation logo="/assets/dsconf-logo-small.png">
            <Button href="#">Hello 1</Button>
            <Button href="#">Hello 2</Button>
            <Button href="#">Hello 3</Button>
        </Navigation>));
