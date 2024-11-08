import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../screens/Auth";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen component={Auth} name="Auth" />
      <Tab.Screen component={Home} name="Home" />
    </Tab.Navigator>
  );
};

export default Index;
