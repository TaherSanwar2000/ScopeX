import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const API_BASE_URL = "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api";

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/Transfers`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch transactions. Status: ${response.status}`
          );
        }

        const data = await response.json();
        setTransactions(data);
        console.log(transactions[9]);
      } catch (error: any) {
        console.error("Error fetching transactions:", error.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <View>
      <Text style={{fontSize:20,color:'#000',marginLeft:'10%'}}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.textContainer}>
              <Text
                style={{ color: "#000", fontSize: 18 }}
              >{`To: ${item.to}`}</Text>
              <Text
                style={{ color: "#000", fontSize: 18 }}
              >{`Received Amount: ${item.received_amount}`}</Text>
              <Text
                style={{ color: "#000", fontSize: 18 }}
              >{`Sent Amount: ${item.sent_amount}`}</Text>
              <Text style={{ color: "#000", fontSize: 18 }}>Rate : {item.rate}</Text>
              <Text
                style={{ color: "#000", fontSize: 18 }}
              >{`Created At: ${item.createdAt}`}</Text>
            </View>
          </View>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    width: "90%",
    paddingHorizontal:10,
    marginHorizontal:'5%',
    backgroundColor:'#fff',
    elevation:10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
});

export default TransactionHistory;
