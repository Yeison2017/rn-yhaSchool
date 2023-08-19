import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

interface Props {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: Props) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationProvider;

const styles = StyleSheet.create({});
