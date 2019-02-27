import React from "react";
import { StyleSheet, Text, View } from "react-native";

class BestSelling extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Best selling!</Text>
      </View>
    );
  }
}

export default BestSelling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
