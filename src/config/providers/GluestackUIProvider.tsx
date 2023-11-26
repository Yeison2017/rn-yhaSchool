import { GluestackUIProvider as Provider } from "@gluestack-ui/themed";

import { config } from "../theme";

interface Props {
  children: React.ReactNode;
}

const GluestackUIProvider = ({ children }: Props) => {
  return (
    <Provider config={config} colorMode="light">
      {children}
    </Provider>
  );
};

export default GluestackUIProvider;
