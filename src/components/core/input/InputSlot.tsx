import React, {ComponentProps} from 'react';
import {InputSlot as InputSlotTheme} from '@gluestack-ui/themed/build/components/Input';

export interface InputSlotProps extends ComponentProps<typeof InputSlotTheme> {}

const InputSlot = ({...props}: InputSlotProps) => {
  return <InputSlotTheme {...props} />;
};

export default InputSlot;
