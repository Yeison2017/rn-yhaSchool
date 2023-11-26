import React, {ComponentProps} from 'react';
import {ButtonGroup as ButtonGroupTheme} from '@gluestack-ui/themed/build/components/Button';

export interface ButtonGroupProps
  extends ComponentProps<typeof ButtonGroupTheme> {}

const ButtonGroup = ({...props}: ButtonGroupProps) => {
  return <ButtonGroupTheme {...props} />;
};

export default ButtonGroup;
