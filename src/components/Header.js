import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
  },
});
