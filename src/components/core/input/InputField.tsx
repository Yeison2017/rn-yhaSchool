import React, {ComponentProps} from 'react';
import {InputField as InputFieldTheme} from '@gluestack-ui/themed/build/components/Input';

export interface InputFieldProps
  extends ComponentProps<typeof InputFieldTheme> {}

const InputField = ({...props}: InputFieldProps) => {
  return <InputFieldTheme {...props} />;
};

export default InputField;
