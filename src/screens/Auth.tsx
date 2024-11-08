import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase, type NavigationProp } from "@react-navigation/native";

type AppNavigationProp = NavigationProp<ParamListBase>;
const Auth = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Text>Auth</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Link to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Auth;
