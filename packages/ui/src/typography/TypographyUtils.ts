import {
  TypographyOptions,
  TypographyStyleOptions,
  Variant,
} from '@material-ui/core/styles/createTypography';

const variants: Variant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'body1',
  'body2',
  'caption',
  'button',
  'subtitle1',
  'subtitle2',
  'overline',
];

export function mergeColorVariants(
  options: TypographyOptions,
  colors: Record<string, TypographyStyleOptions>,
): TypographyOptions {
  const mergedColors = {} as Record<Variant, TypographyStyleOptions>;
  for (const variant of variants) {
    mergedColors[variant] = { ...options[variant], ...colors };
  }

  return {
    ...options,
    ...mergedColors,
  };
}
