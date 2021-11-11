import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { ResponseType } from "expo-auth-session";
import { Alert, Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

interface GoogleButtonProps {
  title: string;
}

export default function GoogleButton({ title }: GoogleButtonProps) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    scopes: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    responseType: ResponseType.Token,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;

      console.log({
        accessToken,
      });

      Alert.alert("Exito", accessToken);
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
