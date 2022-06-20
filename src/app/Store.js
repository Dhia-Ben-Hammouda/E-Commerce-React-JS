import { legacy_createStore as createStore} from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer.js";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore( persistedReducer , composeWithDevTools(applyMiddleware(thunk)) );
export const persistor = persistStore(store);

export default store;
