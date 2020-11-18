import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import { AuthNavigation, Navigation } from "./src/navigation";
import Player from "./src/components/Player";

import { AppProvider } from "./src/context";
import useCachedResources from "./src/utils/useCachedResources";
import useKeyboardOpen from "./src/utils/useKeyboardDidShow";

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  const keyboardOpen = useKeyboardOpen();
  let auth = false;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppProvider>
          {auth ? <Navigation /> : <AuthNavigation />}
          {!keyboardOpen && auth && <Player />}
          <StatusBar barStyle="light-content" />
        </AppProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
