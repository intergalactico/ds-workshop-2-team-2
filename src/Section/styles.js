import styled from 'styled-components';
import * as ts from 'Typography/styles'

export const Section = styled.div`
  background-color: ${p => p.color};
  padding-top: 100px;
  padding-right: 0;
  padding-bottom: 100px;
  padding-left: 0;
`;

export const SectionInner = styled.div`
  padding-top: 50px;
  padding-right: 35px;
  padding-bottom: 50px;
  padding-left: 35px;
`;

export const SectionHeader = styled(ts.Header2)`
  color: ${p => p.color};
`;

export const SectionSubtitle = styled(ts.Header3)`
  color: ${p => p.color};
  text-align: ${p => p.textAlign ? p.textAlign : 'left'};
`;

export const SectionText = styled(ts.Text)`
  color: ${p => p.color};
`;
