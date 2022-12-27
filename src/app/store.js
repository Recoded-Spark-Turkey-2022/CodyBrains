import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

// Export the store and the RootState type
export default store;
