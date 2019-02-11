import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default class HeaderLeft extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-person" size={30} color={"#fff"} />
        <Text style={styles.text}>Good Morning Mossalli</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 130
  },

  text: {
    color: "#fff",
    paddingLeft: 7,
    // fontWeight: "bold"
    fontSize: 16
  }
});
