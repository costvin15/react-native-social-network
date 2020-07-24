import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Home} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default App;