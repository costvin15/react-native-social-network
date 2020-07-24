import React from "react";
import {Provider as PaperProvider} from "react-native-paper";
import App from "./src/App";

const Main = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

export default Main;
