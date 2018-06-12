import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import Button from '../Button';

import colors from '../Colors/colorset.js';

import Navigation from '.'

storiesOf('Navigation', module)
  .add('index',
    withInfo('Navigation component. Such nice')
    (() =>
        <Navigation background={colors.darkblue} logo="/assets/dsconf-logo-small.png">
            <Button color={colors.royalgold} href="#">Hello 1</Button>
            <Button color={colors.royalgold} href="#">Hello 2</Button>
            <Button color={colors.royalgold} href="#">Hello 3</Button>
        </Navigation>));
