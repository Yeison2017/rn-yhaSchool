import React, {ComponentProps} from 'react';
import {Text as TextTheme} from '@gluestack-ui/themed/build/components/Text';

export interface TextProps extends ComponentProps<typeof TextTheme> {}

const Text = ({...props}: TextProps) => {
  return <TextTheme {...props} />;
};

export default Text;
