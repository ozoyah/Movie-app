// theme.js
import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  initialColorMode: "dark", // Set the initial color mode to 'dark'
  useSystemColorMode: false, // Ignore the system color mode preference
  globalCss: {
    "html, body": {
      backgroundColor: "blackAlpha.900", // Set the background color for dark mode
      color: "white", // Set the text color for dark mode
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
