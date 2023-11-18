import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, {  useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Transaction = () => {
  const API_BASE_URL = "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api";

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const createTransaction = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/Transfers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          description,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create transaction. Status: ${response.status}`
        );
      }
      ToastAndroid.show("Transaction created successfully!", ToastAndroid.LONG);
      // Add any additional logic after successful transaction creation
    } catch (error: any) {
      console.error("Error creating transaction:", error.message);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={amount}
        style={{
          width: "80%",
          backgroundColor: "#dcdcdc",
          padding: 10,
          borderRadius: 10,
          fontSize: 18,
          paddingHorizontal: 15,
        }}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
        placeholder="Amount"
      />
      <TextInput
        value={description}
        style={{
          width: "80%",
          backgroundColor: "#dcdcdc",
          padding: 10,
          borderRadius: 10,
          fontSize: 18,
          paddingHorizontal: 15,
          marginTop: "5%",
        }}
        onChangeText={(text) => setDescription(text)}
        placeholder="Description"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#ffa500",
          width: "50%",
          marginTop: "5%",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => createTransaction()}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Send Money
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#ffa500",
          width: "50%",
          marginTop: "5%",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('History')}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
         Go to History
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;
