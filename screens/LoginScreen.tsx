import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser, clearError } from "../store/authSlice";
import { SolarNotesBoldDuotone } from "../assets/icons";
import { LoginStyles } from "../styles/LoginStyles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const dispatch = useAppDispatch();
  const { isLoading, error, isAuthenticated, user } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (error) {
      Alert.alert("Login Failed", error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  // Remove the success alert since navigation will handle the redirect
  // useEffect(() => {
  //   if (isAuthenticated && user) {
  //     Alert.alert("Success", `Welcome, ${user.username}!`);
  //   }
  // }, [isAuthenticated, user]);

  const validateForm = () => {
    const newErrors = { username: "", password: "" };
    let isValid = true;

    if (username.trim() === "") {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    setErrors({ username: "", password: "" });

    if (!validateForm()) {
      return;
    }

    dispatch(loginUser({ username, password }));
  };

  // Debugging effect to log authentication state
  useEffect(() => {
    console.log("LoginScreen - Auth state:", {
      isAuthenticated,
      user,
      isLoading,
      error,
    });
  }, [isAuthenticated, user, isLoading, error]);

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.niorLogo}>
        <SolarNotesBoldDuotone width={60} height={60} />
        <Text style={LoginStyles.title}>Nior's Notes App</Text>
      </View>

      <View style={LoginStyles.formContainer}>
        <View style={LoginStyles.inputContainer}>
          <TextInput
            style={[
              LoginStyles.input,
              errors.username ? LoginStyles.inputError : null,
            ]}
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              if (errors.username) {
                setErrors((prev) => ({ ...prev, username: "" }));
              }
            }}
            autoCapitalize="none"
            editable={!isLoading}
          />
          {errors.username ? (
            <Text style={LoginStyles.errorText}>{errors.username}</Text>
          ) : null}
        </View>

        <View style={LoginStyles.inputContainer}>
          <TextInput
            style={[
              LoginStyles.input,
              errors.password ? LoginStyles.inputError : null,
            ]}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: "" }));
              }
            }}
            secureTextEntry
            autoCapitalize="none"
            editable={!isLoading}
          />
          {errors.password ? (
            <Text style={LoginStyles.errorText}>{errors.password}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={[
            LoginStyles.loginButton,
            isLoading && LoginStyles.loginButtonDisabled,
          ]}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={LoginStyles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
