import styled from 'styled-components';


import * as ts from '../Typography/styles';
import Button from '../Button';

import colors from '../Colors/colorset.js';

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: ${p => p.height ? p.height : '800px' };
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${p => 'url('+ p.background + ')'}
`;


export const HeroHeader = styled(ts.Header1)`
  color: ${colors.white};
`;

export const HeroText = styled(ts.Text)`
  text-transform: uppercase;
  color: ${colors.white};
`;


export const HeroButton = styled(Button)`
  text-transform: uppercase;
  color: ${colors.white};
`
