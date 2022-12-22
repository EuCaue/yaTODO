/* eslint-disable import/prefer-default-export */
import * as colors from './colors';

export interface Colors {
  primary: string;
  secondary: string;
  text: string;
  accentColor: string;
  highlight: string;
}

export const defaultDark: Colors = {
  primary: `${colors.primaryDark}`,
  secondary: `${colors.secondaryDark}`,
  text: `${colors.textDefaultDark}`,
  accentColor: `${colors.accentColorDark}`,
  highlight: `${colors.highlightDark}`,
};

export const defaultLight: Colors = {
  primary: `${colors.primaryLight}`,
  secondary: `${colors.secondaryLight}`,
  text: `${colors.textDefaultLight}`,
  accentColor: `${colors.accentColorLight}`,
  highlight: `${colors.highlightLight}`,
};

export const rosePineDarkTheme: Colors = {
  primary: `${colors.baseDark}`,
  secondary: `${colors.surfaceDark}`,
  text: `${colors.textDark}`,
  accentColor: `${colors.pineDark}`,
  highlight: `${colors.highlightLowDark}`,
};

export const rosePineLightTheme: Colors = {
  primary: `${colors.baseLight}`,
  secondary: `${colors.surfaceLight}`,
  text: `${colors.textLight}`,
  accentColor: `${colors.pineLight}`,
  highlight: `${colors.highlightLowLight}`,
};
