import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useTheme} from "react-native-paper";

import {Home} from "./screens";

const SubContext = () => {
  const Tab = createMaterialBottomTabNavigator();
  const Theme = useTheme();

  return (
    <Tab.Navigator initialRouteName="Home"
      barStyle={{
        backgroundColor: Theme.colors.primary,
      }}>
      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => 
            <MaterialIcons name="home" color={color} size={26} />
        }} />
    </Tab.Navigator>
  );
};

export default SubContext;
