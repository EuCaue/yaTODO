export interface BreakPointsI {
  mobileMin: string;
  mobileMax: string;
  tabletMin: string;
  tabletMax: string;
}

export const breakPoints: BreakPointsI = {
  mobileMin: '0px',
  mobileMax: '575px',
  tabletMin: '36em',
  tabletMax: '70em',
};
