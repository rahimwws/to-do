import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase, type NavigationProp } from "@react-navigation/native";

type AppNavigationProp = NavigationProp<ParamListBase>;
const Home = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <SafeAreaView
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Link to auth</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
