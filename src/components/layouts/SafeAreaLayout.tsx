import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../../config/theme";
import { Box } from "../core";
import { KeyboardAwareScrollView } from "@mtourj/react-native-keyboard-aware-scroll-view";

interface Props {
  children: React.ReactNode;
  colorArea?: string;
  hasKeyboardAwareScrollView?: boolean;
}

const SafeAreaLayout = ({
  children,
  colorArea,
  hasKeyboardAwareScrollView = true,
}: Props) => {
  return (
    <SafeAreaView style={styles(colorArea).safeAreaView}>
      <StatusBar backgroundColor={colorArea ?? colors.white} />
      <Box style={styles().container}>
        {hasKeyboardAwareScrollView === true ? (
          <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </KeyboardAwareScrollView>
        ) : (
          <>{children}</>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default SafeAreaLayout;

const styles = (colorArea?: string) =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: colorArea ?? colors.white,
    },
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  });
