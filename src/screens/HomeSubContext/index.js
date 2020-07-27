import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useTheme} from "react-native-paper";

import {Home, Friends, Profile} from "./screens";

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
        }}
      />
      <Tab.Screen name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({color}) =>
            <MaterialIcons name="group" color={color} size={26} />
        }}
      />
      <Tab.Screen name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) =>
            <MaterialIcons name="person" color={color} size={26} />
        }}
        />
    </Tab.Navigator>
  );
};

export default SubContext;
