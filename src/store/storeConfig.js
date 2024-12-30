import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./tasks/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // FOR Tracing code
  /* devToolsEnhancer({
    trace: true,
  }) */
);

export default store;
