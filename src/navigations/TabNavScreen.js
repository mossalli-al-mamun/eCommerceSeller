import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Bottom Tab
import Home from "../screen/Home";
import Settings from "../screen/Settings";
import Account from "../screen/Account";

//Top Tab
// import Men from "../screens/topTab/Men";
// import ProductsDetails from "../screens/ProductsDetails";
// import ProductsDetailsScreen from "../screens/ProductDetailsScreen";
// import HeaderLeft from "../other pages/header/HeaderLeft";
// import Login from "../users/Login";
// import SignUp from "../users/SignUp";

const DashboardNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }

  // Login: {
  //   screen: Login,
  //   navigationOptions: {
  //     header: null
  //   }
  // },

  // SignUp: {
  //   screen: SignUp,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
});

const BottomTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: DashboardNavigator, //Here call the StackNavigator as nested Navigator
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={20} color={tintColor} />
        )
      }
    },

    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" size={20} color={tintColor} />
        )
      }
    },

    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-person" size={20} color={tintColor} />
        )
      }
    }
  },

  //Getting getTabBarIcon

  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) =>
    //     getTabBarIcon(navigation, focused, tintColor),
    // }),
    tabBarOptions: {
      activeTintColor: "#00b8d4",
      inactiveTintColor: "gray",
      style: {
        height: 40,
        paddingVertical: 5
        //paddingTop: 10,
        // backgroundColor: "#006064"
      },
      labelStyle: {
        // fontSize: 11,
        lineHeight: 12
      }
    }
  }
);

const AppContainerBottom = createAppContainer(BottomTabNav);

class NavScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      height: 0
    }
  };

  render() {
    return (
      // <Provider store={store}>
      //   <PersistGate loading={null} persistor={persistor}>
      //     <AppContainerBottom />
      //   </PersistGate>
      // </Provider>
      <AppContainerBottom />
    );
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
