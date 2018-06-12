/*
 * Section component provides a container with paddings.
 */
import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
/*
 * For its styles, Section component uses plain CSS.
 * Change it to styled-components, if you want.
 */
import * as s from './styles';

/*
 * Even though the component is using plain CSS, it still can re-use
 * styled-components from other patterns.
 */

/*
 * Note! When using plain CSS, the class names have to be provided manually.
 */
const Section = ({ children, backgroundColor }) => {
  return (
    <s.Section color={backgroundColor}>
      <s.SectionInner>
        {children}
      </s.SectionInner>
    </s.Section>
  );
};

Section.defaultProps = {
  backgroundColor: 'white'
};

Section.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

/*
 * For re-use of Typography styles, Section component has a couple of subcomponents to be
 * used as wrappers for texts and headers. Check out the story (documentation) to see how
 * these wrappers are used.
 */

export const SectionHeader = s.SectionHeader;

export const SectionText = s.SectionText;

export default Section;

