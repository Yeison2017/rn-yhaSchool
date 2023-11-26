import React, {ComponentProps} from 'react';
import {Box as BoxTheme} from '@gluestack-ui/themed/build/components/Box';

export interface BoxProps extends ComponentProps<typeof BoxTheme> {}

const Box = ({...props}: BoxProps) => {
  return <BoxTheme {...props} />;
};

export default Box;
