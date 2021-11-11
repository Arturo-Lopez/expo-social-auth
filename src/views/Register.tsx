import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FacebookButton from "../components/FacebookButton";
import GoogleButton from "../components/GoogleButton";
import useGetNavigation from "../hooks/useGetNavigation";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
});

const Register = () => {
  const { navigate } = useGetNavigation("Register");

  return (
    <View style={styles.root}>
      <GoogleButton title="Registro con Google" />
      <FacebookButton title="Registro con Facebook" />
      <Button title="Ir al ingreso" onPress={() => navigate("Login")} />
    </View>
  );
};

export default Register;
