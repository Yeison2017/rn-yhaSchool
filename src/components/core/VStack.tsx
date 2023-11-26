import React, {ComponentProps} from 'react';
import {VStack as VStackTheme} from '@gluestack-ui/themed/build/components/VStack';

export interface VStackProps extends ComponentProps<typeof VStackTheme> {}

const VStack = ({...props}: VStackProps) => {
  return <VStackTheme {...props} />;
};

export default VStack;
