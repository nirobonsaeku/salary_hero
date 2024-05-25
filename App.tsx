/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import AppNavigation from "./src/navigation/main-navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
