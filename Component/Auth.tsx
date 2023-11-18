import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export default function Auth() {
  const [token, setToken] = useState("");
  const navigation = useNavigation();

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "11683782340-321hsp09ilfip6ehrfj7gll3qd12aqod.apps.googleusercontent.com",
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setToken(JSON.stringify(userInfo.idToken));
            if (token) {
              navigation.navigate("Transaction");
            }
            console.log(token);
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}
      />
    </View>
  );
}
