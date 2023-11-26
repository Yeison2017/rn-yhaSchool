import React, {ComponentProps} from 'react';
import {ButtonText as ButtonTextTheme} from '@gluestack-ui/themed/build/components/Button';

export interface ButtonTextProps
  extends ComponentProps<typeof ButtonTextTheme> {}

const ButtonText = ({...props}: ButtonTextProps) => {
  return <ButtonTextTheme {...props} />;
};

export default ButtonText;
