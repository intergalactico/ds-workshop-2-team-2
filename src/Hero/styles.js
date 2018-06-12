import styled from 'styled-components';


import * as ts from '../Typography/styles';
import Button from '../Button';

export const Hero = styled.div`
  text-align: center;
`;


export const HeroHeader = ts.Header1;

export const HeroText = styled(ts.Text)`
  text-transform: uppercase
`;


export const HeroButton = styled(Button)`
  text-transform: uppercase
`
