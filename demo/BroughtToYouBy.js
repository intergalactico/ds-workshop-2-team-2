import React from 'react';
import { Section, SectionSubtitle, Color } from '../lib/my-awesome-library'

const BroughtToYouBy = () => {
  return (
    <Section backgroundColor={Color.darkblue}>
      <SectionSubtitle color={Color.white} textAlign='center'>Main organizer</SectionSubtitle>
      <img src='./assets/intergalactico-dark.png' width='250px'/>
      <SectionSubtitle color={Color.white} textAlign='center'>Partners</SectionSubtitle>
      <SectionSubtitle color={Color.white} textAlign='center'>Supported by</SectionSubtitle>
    </Section>
  );
}

export default BroughtToYouBy;