import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { useAppSelector } from "./store/hooks";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator, View } from "react-native";

function AppContent() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ActivityIndicator size="large" color="#007AFF" />
            </View>
          }
          persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
