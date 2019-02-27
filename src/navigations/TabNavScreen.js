import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//Reducer

import { store, persistor } from "../redux/store/index";

//Bottom Tab
import Home from "../screen/Home";
import Settings from "../screen/Settings";
import Account from "../screen/Account";
import AddProducts from "../screen/subScreen/addProducts/AddProducts";
import MonthlySales from "../screen/subScreen/salesReports/MonthlySales";
import YearlySales from "../screen/subScreen/salesReports/YearlySales";
import AllProducts from "../screen/subScreen/productsScreens/AllProducts";
import NewProducts from "../screen/subScreen/productsScreens/NewProducts";
import BestSelling from "../screen/subScreen/productsScreens/BestSelling";
import PendingOrders from "../screen/subScreen/manageOrder/PendingOrders";
import OrderDetails from "../screen/subScreen/manageOrder/OrderDetails";
import ProductDetails from "../screen/subScreen/productDetails/ProductDetails";

//Top Tab
// import Men from "../screens/topTab/Men";
// import ProductsDetails from "../screens/ProductsDetails";
// import ProductsDetailsScreen from "../screens/ProductDetailsScreen";
// import HeaderLeft from "../other pages/header/HeaderLeft";
// import Login from "../users/Login";
// import SignUp from "../users/SignUp";

const productsTab = createMaterialTopTabNavigator(
  {
    AllProducts: AllProducts,
    BestSelling: BestSelling,
    NewProduct: NewProducts
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) =>
    //     getTabBarIcon(navigation, focused, tintColor),
    // }),
    tabBarOptions: {
      // activeTintColor: "#00b8d4",
      // inactiveTintColor: "gray",
      style: {
        height: 45,
        // paddingVertical: 5
        //paddingTop: 10,
        backgroundColor: "#255E76"
      },
      indicatorStyle: {
        color: "black"
      },
      scrollEnabled: true
      // labelStyle: {
      //   // fontSize: 11,
      //   lineHeight: 12
      // }
    }
  }
);

const DashboardNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  AddProducts: {
    screen: AddProducts,
    navigationOptions: {
      header: null
    }
  },
  MonthlySales: {
    screen: MonthlySales,
    navigationOptions: {
      // header: null
      //   marginTop: 0,
      // headerStyle: { height: 30, paddingVertical: 20 }
      // headerLeft: (
      //   <TouchableOpacity onPress={() => navigation.goBack()}>
      //     <MaterialIcons name="chevron-left" size={30} color={"black"} />
      //   </TouchableOpacity>
      // )
    }
  },
  YearlySales: {
    screen: YearlySales,
    navigationOptions: {
      headerStyle: { paddingVertical: 5 }
    }
  },
  Products: {
    screen: productsTab,
    navigationOptions: {
      header: null
    }
  },

  PendingOrders: {
    screen: PendingOrders,
    navigationOptions: {
      header: null
    }
  },
  OrderDetails: {
    screen: OrderDetails,
    navigationOptions: {
      header: null
    }
  },
  ProductDetails: {
    screen: ProductDetails,
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
    console.log("Hello");
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainerBottom />
        </PersistGate>
      </Provider>
      // <Provider store={store}>
      //   <PersistGate loading={null} persistor={persistor}>
      //     <AppContainerBottom />
      //   </PersistGate>
      // </Provider>
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
