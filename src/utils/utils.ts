/* eslint-disable import/prefer-default-export */
export const isWhiteSpace = (s: string): boolean => {
  for (let i = 0; i < s.length; i += 1) {
    if (s.charAt(i) !== ' ') {
      return false;
    }
  }
  return true;
};
