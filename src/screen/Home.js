import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { PieChart, LineChart } from "react-native-chart-kit";
import Swiper from "react-native-swiper";

import HeaderLeft from "../header/HeaderLeft";
import HeaderRight from "../header/HeaderRight";
import HeaderCenter from "../header/HeaderCenter";

import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

var { width } = Dimensions.get("window");

const data = [
  {
    name: "Shirt",
    quantity: 21,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Pant",
    quantity: 12,
    color: "#f9a825",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "3 Pcs",
    quantity: 15,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Shari",
    quantity: 6,
    color: "#455a64",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Watch",
    quantity: 13,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          // statusBarProps={{ barStyle: "dark-content", color: "red" }}
          placement="center"
          containerStyle={{
            backgroundColor: "#255E76",
            height: 45,
            paddingTop: 0
          }}
        >
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </Header>
        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.titleFont}>Towday's Report</Text>
          </View>

          <View style={styles.reportView}>
            <Swiper style={styles.wrapper} showsButtons={true}>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Pending Orders (10)</Text>
                <PieChart
                  data={data}
                  width={width}
                  height={140}
                  chartConfig={chartConfig}
                  accessor="quantity"
                  backgroundColor="transparent"
                  paddingLeft="15"
                />
              </View>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Total Orders (45)</Text>

                <PieChart
                  data={data}
                  width={width}
                  height={140}
                  chartConfig={chartConfig}
                  accessor="quantity"
                  backgroundColor="transparent"
                  paddingLeft="15"
                />
              </View>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Delivered (25)</Text>
                <PieChart
                  data={data}
                  width={width}
                  height={140}
                  chartConfig={chartConfig}
                  accessor="quantity"
                  backgroundColor="transparent"
                  paddingLeft="15"
                />
              </View>
            </Swiper>
          </View>

          <View style={styles.title}>
            <Text style={styles.titleFont}>Store Management</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.addProducts}
              onPress={() => this.props.navigation.navigate("AddProducts")}
            >
              <Text style={styles.addProductsText}>Add Products </Text>
              <Entypo name={"circle-with-plus"} size={18} color="#ff6f00" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.products}
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Text style={styles.productsText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageOrder}>
              <Text style={styles.productsText}>Manage Order</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleFont}>Listed Products on Facebook</Text>
          </View>

          <View style={styles.productsOnFb} />

          <View style={styles.title}>
            <Text style={styles.titleFont}>Boosted Post</Text>
          </View>

          <View style={styles.productsOnFb} />

          <View style={styles.title}>
            <Text style={styles.titleFont}>Finacial Reports</Text>
          </View>
          <View>
            <View style={styles.todaysPostView}>
              <Text
                style={styles.productsText}
                onPress={() => this.props.navigation.navigate("MonthlySales")}
              >
                Monthly Report
              </Text>
              <Text
                style={styles.productsText}
                onPress={() => this.props.navigation.navigate("YearlySales")}
              >
                Yearly Report
              </Text>
            </View>
            <View style={styles.todaysPostView}>
              <View style={styles.boostBalance}>
                <Text style={styles.productsText}>Boosting Balance :</Text>
              </View>

              <View style={styles.showBalance}>
                <Text>Show Balance</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  title: {
    backgroundColor: "#cfcfcf",
    justifyContent: "center",
    alignItems: "center",
    height: 32
  },
  titleFont: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#212121"
  },
  scrl: {
    // paddingLeft: 7,
    // paddingRight: 7,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center"
    // height: 220
  },
  scroolText: {
    color: "#ff6f00",
    fontSize: 16
  },
  reportView: {
    height: 170,
    fontSize: 17
  },
  addProducts: {
    paddingTop: 5,
    // paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  products: {
    paddingTop: 5,
    // paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  manageOrder: {
    paddingTop: 5,
    paddingBottom: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  addProductsText: {
    color: "#ff6f00",
    fontSize: 17
  },
  productsText: {
    color: "#616161",
    fontSize: 16,
    fontWeight: "bold"
  },
  productsOnFb: {
    height: 100
  },
  fbPostView: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  postButton: {
    backgroundColor: "#9e9e9e",
    height: 30,
    // width: 200,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 10
  },
  boostButton: {
    backgroundColor: "#255E76",
    height: 35,
    width: 130,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 10
  },
  todaysPostView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10
  },
  boostBalance: {
    justifyContent: "center",
    alignItems: "center"
  },
  showBalance: {
    backgroundColor: "#bdbdbd",
    height: 30,
    width: 130,
    // borderWidth: 0.5,
    // borderRadius: 4,
    // borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
  },

  wrapper: {}
});
