import React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ButtonShowPasswordStyled } from './styled';

export default function ButtonShowPassword({
  showPassword,
  setShowPassword
}: {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}) {
  console.log(showPassword);
  return (
    <ButtonShowPasswordStyled
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
    </ButtonShowPasswordStyled>
  );
}
