/* eslint-disable import/prefer-default-export */
import * as colors from './colors';

export interface Colors {
  primary: string;
  secondary: string;
  text: string;
  accentColor: string;
  error: string;
}

export const defaultDark: Colors = {
  primary: `${colors.primaryDark}`,
  secondary: `${colors.secondaryDark}`,
  text: `${colors.textDefaultDark}`,
  accentColor: `${colors.accentColorDark}`,
  error: `${colors.errorDark}`
};

export const darker: Colors = {
  primary: `${colors.primaryDarker}`,
  secondary: `${colors.secondaryDarker}`,
  text: `${colors.textDarker}`,
  accentColor: `${colors.accentColorDarker}`,
  error: `${colors.errorDarker}`
};

export const defaultLight: Colors = {
  primary: `${colors.primaryLight}`,
  secondary: `${colors.secondaryLight}`,
  text: `${colors.textDefaultLight}`,
  accentColor: `${colors.accentColorLight}`,
  error: `${colors.errorLight}`
};

export const rosePineDarkTheme: Colors = {
  primary: `${colors.baseDark}`,
  secondary: `${colors.surfaceDark}`,
  text: `${colors.textDark}`,
  accentColor: `${colors.pineDark}`,
  error: `${colors.loveDark}`
};

export const rosePineLightTheme: Colors = {
  primary: `${colors.baseLight}`,
  secondary: `${colors.surfaceLight}`,
  text: `${colors.textLight}`,
  accentColor: `${colors.pineLight}`,
  error: `${colors.loveLight}`
};
