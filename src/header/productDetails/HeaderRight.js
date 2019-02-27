import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Badge, withBadge, Icon } from "react-native-elements";

export default class App extends React.Component {
  state = {
    notifications: 1
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
