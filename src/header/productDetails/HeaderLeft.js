import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default class HeaderLeft extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-person" size={30} color={"#fff"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  text: {
    color: "#fff",
    paddingLeft: 7,
    fontSize: 16
  }
});
