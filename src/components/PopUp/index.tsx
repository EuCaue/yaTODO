import React from 'react';

import {
  PopUpContainer,
  TextPopUp,
  ButtonDeleteCancel,
  ButtonDeleteConfirm,
  SpanPopUp
} from './styled';

export interface IPopUP {
  setShowPopUp: (showPopUp: boolean) => void;
  handleConfirm: () => void;
  showPopUp: boolean;
  arrayText: string[];
}

// TODO: make this use modal or dialog

export default function PopUp({
  setShowPopUp,
  handleConfirm,
  showPopUp,
  arrayText
}: IPopUP) {
  const mapText: JSX.Element[] = arrayText.map((text: string) => {
    return (
      <>
        <span>{text}</span>
        <br />
      </>
    );
  });
  return (
    <PopUpContainer style={{ display: showPopUp ? 'flex' : 'none' }}>
      <TextPopUp>{mapText}</TextPopUp>
      <SpanPopUp>
        <ButtonDeleteConfirm
          type="button"
          onClick={handleConfirm}
        >
          OK
        </ButtonDeleteConfirm>
        <ButtonDeleteCancel
          type="button"
          onClick={() => setShowPopUp(!showPopUp)}
        >
          Cancel
        </ButtonDeleteCancel>
      </SpanPopUp>
    </PopUpContainer>
  );
}
