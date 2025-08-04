import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAppSelector } from "./store/hooks";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppContent() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // console.log("App - isAuthenticated:", isAuthenticated); // Debug log

  return isAuthenticated ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </SafeAreaProvider>
  );
}
