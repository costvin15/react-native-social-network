import React from "react";
import {Provider as ReduxProvider} from "react-redux";
import {Provider as PaperProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";

import App from "./src/App";
import {Store} from "./src/store";
import "react-native-gesture-handler";

const Main = () => {
  return (
    <ReduxProvider store={Store}>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default Main;
