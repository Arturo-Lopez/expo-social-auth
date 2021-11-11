import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { Button, Alert } from "react-native";

WebBrowser.maybeCompleteAuthSession();

interface FacebookButtonProps {
  title: string;
}

export default function FacebookButton({ title }: FacebookButtonProps) {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "FACEBOOK_CLIENT_ID",
    responseType: ResponseType.Token,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;

      console.log({
        response,
        access_token,
      });

      Alert.alert("Exito", access_token);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title={title}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
