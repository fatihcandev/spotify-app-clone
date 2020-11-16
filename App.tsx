import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthNavigation, Navigation } from "./src/navigation";
import Player from "./src/components/Player";

import { AppProvider } from "./src/context";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();
  let auth = false;
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppProvider>
          {auth ? <Navigation /> : <AuthNavigation />}
          {auth && <Player />}
          <StatusBar style="light" />
        </AppProvider>
      </SafeAreaProvider>
    );
  }
}
