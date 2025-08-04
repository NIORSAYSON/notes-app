import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock credentials for demo
const VALID_CREDENTIALS = {
  username: "test",
  password: "password123",
};

interface User {
  username: string;
  loginTimestamp: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validate credentials
      if (
        username.trim() !== VALID_CREDENTIALS.username ||
        password.trim() !== VALID_CREDENTIALS.password
      ) {
        return rejectWithValue("Invalid username or password");
      }

      const user = {
        username: username.trim(),
        loginTimestamp: new Date().toISOString(),
      };

      return user;
    } catch (error) {
      return rejectWithValue("Login failed. Please try again.");
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    // Add manual logout action for clearing state
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload as string;
      })
      // Logout cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
