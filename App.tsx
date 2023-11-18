import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


