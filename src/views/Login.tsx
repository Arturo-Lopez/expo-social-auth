import React from "react";
import { Button, StyleSheet, View } from "react-native";
import FacebookButton from "../components/FacebookButton";
import GoogleButton from "../components/GoogleButton";

import useGetNavigation from "../hooks/useGetNavigation";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

const Login = () => {
  const { navigate } = useGetNavigation("Login");

  return (
    <View style={styles.root}>
      <GoogleButton title="Ingreso con Google" />
      <FacebookButton title="Ingreso con Facebook" />

      <Button title="Ir al registro" onPress={() => navigate("Register")} />
    </View>
  );
};

export default Login;
