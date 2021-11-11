import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Routes;
