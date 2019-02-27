import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import productReducer from "../reducers/productReducer";
import testReducer from "../reducers/testReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  test: testReducer,
  product: productReducer
  //   user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger())
);
export const persistor = persistStore(store);
