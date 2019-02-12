import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "../users/Login";
import Home from "../screen/Home";

// import Settings from "../screen/Settings";
import TabNavScreen from "../navigations/TabNavScreen";

import { createStackNavigator, createAppContainer } from "react-navigation";

const NavApp = createStackNavigator({
  Login: { screen: TabNavScreen },
  Home: { screen: Login }
});

const AppContainer = createAppContainer(NavApp);

class NavScreen extends React.Component {
  render() {
    // return <AppContainer />;
    return <AppContainer />;
  }
}

export default NavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: 'center',
  }
});
