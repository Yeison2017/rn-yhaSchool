import React, {ComponentProps} from 'react';
import {Button as ButtonTheme} from '@gluestack-ui/themed/build/components/Button';

export interface ButtonProps extends ComponentProps<typeof ButtonTheme> {}

const Button = ({...props}: ButtonProps) => {
  return <ButtonTheme {...props} />;
};

export default Button;
