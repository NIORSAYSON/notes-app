import { createStackNavigator } from "@react-navigation/stack";
import { useAppSelector } from "../store/hooks";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  console.log("Navigation - isAuthenticated:", isAuthenticated); // Debug log

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
