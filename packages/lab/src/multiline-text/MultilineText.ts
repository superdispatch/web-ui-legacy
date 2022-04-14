import { Property } from 'csstype';
import styled from 'styled-components';

export interface MultilineTextProps {
  overflowWrap?: Extract<
    Property.OverflowWrap,
    'anywhere' | 'break-word' | 'normal'
  >;
}

export const MultilineText = styled.span<MultilineTextProps>`
  white-space: pre-wrap;
  overflow-wrap: ${({ overflowWrap = 'normal' }) => overflowWrap};
`;

MultilineText.displayName = 'MultilineText';
