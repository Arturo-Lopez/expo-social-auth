import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

const Profile = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Profile;
