import React, {ComponentProps} from 'react';
import {InputIcon as InputIconTheme} from '@gluestack-ui/themed/build/components/Input';

export interface InputIconProps extends ComponentProps<typeof InputIconTheme> {}

const InputIcon = ({...props}: InputIconProps) => {
  return <InputIconTheme {...props} />;
};

export default InputIcon;
