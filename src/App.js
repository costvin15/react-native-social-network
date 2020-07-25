import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Home, Friend, Chat} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default App;