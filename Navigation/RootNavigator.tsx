import { createStackNavigator } from "@react-navigation/stack";
import Transaction from "../src/Transaction";
import TransactionHistory from "../src/TransactionHistory";
import Auth from "../Component/Auth";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={Auth} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="History" component={TransactionHistory} />
    </Stack.Navigator>
  );
}
export default MyStack;
