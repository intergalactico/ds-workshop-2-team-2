import React from 'react';
import { storiesOf } from '@storybook/react';
import colors from '../Colors/colorset';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/*
 * This story (documentation) shows how to use the Section component and its
 * helping sub-components for the texts. The subcomponents are imported
 * as one object and are renamed to "t", this is shorter. Look below how
 * to wrap texts with them.
 */
import Section, {SectionHeader, SectionSubtitle, SectionText} from '.';

storiesOf('Section', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 Section component provides a container with background color and paddings.
    `)(() => (
      <Section backgroundColor={colors.darkblue}>
        <SectionHeader color={colors.white}>Really long header text with lots of complicated text to hopefully wrap on several lines</SectionHeader>
        <SectionSubtitle color={colors.white} textAlign='center'>Short centered subtitle</SectionSubtitle>
        <SectionText color={colors.white}>Text inside the section (with typography).</SectionText>
      </Section>
  )));
