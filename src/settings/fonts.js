const defaultBrowserFontSize = '16px';

const getPixelUnit = (pixelValue) => {
  const pxIndex = pixelValue.indexOf('px');
  const pixelUnit = Number(pixelValue.slice(0, pxIndex));
  return pixelUnit;
};

const convertPixelsToRem = (
  pixelValue,
  baseFontSize = defaultBrowserFontSize
) => {
  const pixelUnit = getPixelUnit(pixelValue);
  const baseFontUnit = getPixelUnit(baseFontSize);
  const calculatedRemUnit = pixelUnit / baseFontUnit;

  return String(calculatedRemUnit) + 'rem';
};


const baseFontSize = '9px';

const getfontSize = (fontSize) => {
  return convertPixelsToRem(`${fontSize}px`, baseFontSize);
};

const fontFamilies = {
  openSans: '"Open Sans", sans-serif',
  neueHaasUnica: 'neue-haas-unica, sans-serif',
  canadaTypeGibson: 'canada-type-gibson, sans-serif',
};

const fontSizes = {
  baseFontSize,
  f14: getfontSize(14),
  f16: getfontSize(16),
  f18: getfontSize(18),
  f20: getfontSize(20),
  f22: getfontSize(22),
  f24: getfontSize(24),
  f26: getfontSize(26),
  f28: getfontSize(28),
  f30: getfontSize(30),
  f36: getfontSize(36),
  f40: getfontSize(40),
  f54: getfontSize(54),
};

const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export { fontFamilies, fontWeights, fontSizes };
