import React from "react";
import { StyleSheet, Text, View } from "react-native";

class NewProducts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Products!</Text>
      </View>
    );
  }
}

export default NewProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
