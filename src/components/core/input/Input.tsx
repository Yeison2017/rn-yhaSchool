import React, {ComponentProps} from 'react';
import {Input as InputTheme} from '@gluestack-ui/themed/build/components/Input';

export interface InputProps extends ComponentProps<typeof InputTheme> {}

const Input = ({...props}: InputProps) => {
  return <InputTheme {...props} />;
};

export default Input;
