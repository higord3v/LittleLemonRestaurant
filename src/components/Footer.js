import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 12,
  },
});
