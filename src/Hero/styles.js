import styled from 'styled-components';


import * as ts from '../Typography/styles';

import colors from '../Colors/colorset';

export const Hero = styled.div`
  text-align: center;
`;


export const HeroHeader = ts.Header1;

export const HeroText = ts.Text;

// export const HeroButton = 


export const IconListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

export const IconLink = styled.a`
  color: ${colors.grey};
  text-decoration: none;
`;

