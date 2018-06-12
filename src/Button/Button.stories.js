/* Helpful imports */
import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/* The components to use in the stories */
import Box from 'Box';
import Icon from 'Icon';

/* The component to document */
import Button from '.';

storiesOf('Button', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 Button component provides interfaces for all types
 of the buttons. Different types of the buttons are coded
 as different components and imported here.
        `)(() => {
      return (
        <div>
          <Box>
            <Button onClick={function(){ alert('You clicked!'); }}>I am a button</Button>
          </Box>
          <Box>
            <Button href="https://jepjep.fi/">I am a link button</Button>
          </Box>
        </div>
      );
  }))
  .add('colors',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button>Normal</Button>
            <Button color='#1b8ceb'>Primary</Button>
            <Button color='#00d1b2'>Success</Button>
            <Button color='#e91e63'>Danger</Button>
            <Button color='#888888'>Gray</Button>
            <Button color='#888888'>Light</Button>
            <Button color='#000'>Black</Button>
          </Box>
        </div>
      );
  }))
  .add('with different size',
    withInfo()(() => {
      return (
        <Box>
          <Button color='#1b8ceb' size='0.60rem'>Tiny</Button>
          <Button color='#00d1b2' size='0.785rem'>Small</Button>
          <Button color='#e91e63' size='1rem'>Normal</Button>
          <Button color='#888888' size='1.5rem'>Large</Button>
          <Button color='#000' size='2.0rem'>XLarge</Button>
        </Box>
      );
  }));
