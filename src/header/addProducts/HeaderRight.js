import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Badge, withBadge, Icon } from "react-native-elements";

export default class App extends React.Component {
  state = {
    notifications: 1
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Ionicons name="ios-notifications-outline" size={30} color={"#fff"} />

        <Badge
          value="0"
          status="error"
          containerStyle={{ position: "absolute", top: 4, right: 1 }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
