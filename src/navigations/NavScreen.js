import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "../users/Login";
import Home from "../screen/Home";
// import AddProducts from "../screen/subScreen/addProducts/AddProducts";
// import MonthlySales from "../screen/subScreen/salesReports/MonthlySales";

// import Settings from "../screen/Settings";
import TabNavScreen from "../navigations/TabNavScreen";

import { createStackNavigator, createAppContainer } from "react-navigation";

const NavApp = createStackNavigator({
  Login: { screen: TabNavScreen },
  Home: { screen: Login }
  // AddProducts: { screen: AddProducts }
  // MonthlyReport: { screen: MonthlySales }
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
