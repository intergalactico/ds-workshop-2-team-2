import React from 'react';
import { Section, SectionSubtitle, Color } from '../lib/my-awesome-library'

const BroughtToYouBy = () => {
  const imgSize = '35%';

  return (
    <Section backgroundColor={Color.darkblue}>
      <SectionSubtitle color={Color.white} textAlign='center'>Main organizer</SectionSubtitle>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src='./assets/intergalactico-dark.png' width={imgSize} height={imgSize}/>
      </div>
      <SectionSubtitle color={Color.white} textAlign='center'>Partners</SectionSubtitle>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src='./assets/abstract-dark.png' width={imgSize} height={imgSize}/>
        <img src='./assets/eficode-light.png' width={imgSize} height={imgSize}/>
        <img src='./assets/futurice-light.png' width={imgSize} height={imgSize}/>
      </div>
      <SectionSubtitle color={Color.white} textAlign='center'>Supported by</SectionSubtitle>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src='./assets/idean-light.png' width={imgSize} height={imgSize}/>
        <img src='./assets/smartly-dark.png' width={imgSize} height={imgSize}/>
        <img src='./assets/intergalactico-dark.png' width={imgSize} height={imgSize}/>
      </div>
    </Section>
  );
}

export default BroughtToYouBy;