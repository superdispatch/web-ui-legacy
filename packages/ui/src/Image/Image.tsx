import { useTheme } from '@material-ui/core';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  srcDark?: string;
}

export function Image({ srcDark, src, ...props }: ImageProps): JSX.Element {
  const theme = useTheme();
  const value = theme.palette.type === 'dark' && srcDark ? srcDark : src;
  return <img {...props} src={value} />;
}
