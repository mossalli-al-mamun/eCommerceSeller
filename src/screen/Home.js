import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import HeaderLeft from "../header/HeaderLeft";
import HeaderRight from "../header/HeaderRight";
import HeaderCenter from "../header/HeaderCenter";

import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header containerStyle={{ backgroundColor: "#255E76", height: 72 }}>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
          </Header>

          <View style={styles.title}>
            <Text style={styles.titleFont}>Towday's Report</Text>
          </View>

          <View style={styles.reportView}>
            <ScrollView horizontal={true}>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Pending Orders (0)</Text>
              </View>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Total Orders (0)</Text>
              </View>
              <View style={styles.scrl}>
                <Text style={styles.scroolText}>Delivered (0)</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.title}>
            <Text style={styles.titleFont}>Store Management</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.addProducts}>
              <Text style={styles.addProductsText}>Add Products </Text>
              <Entypo name={"circle-with-plus"} size={18} color="#ff6f00" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.products}>
              <Text style={styles.productsText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageOrder}>
              <Text style={styles.productsText}>Manage Order</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.title}>
            <Text style={styles.titleFont}>Campaign</Text>
          </View>
          <View>
            <View style={styles.fbPostView}>
              <TouchableOpacity style={styles.postButton}>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  Post On Facebook
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                // padding: 5,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity style={styles.boostButton}>
                <Text
                  style={{ fontSize: 17, color: "#fff", fontWeight: "bold" }}
                >
                  Boost Post
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.todaysPostView}>
              <Text style={styles.productsText}>Todays Post (0)</Text>
              <Text style={styles.productsText}>Boosting Now (0)</Text>
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
        </View>
      </ScrollView>
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
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 5
  },
  scroolText: {
    color: "#ff6f00",
    fontSize: 16
  },
  reportView: {
    height: 110,
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
    fontSize: 16
  },
  fbPostView: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  postButton: {
    backgroundColor: "#9e9e9e",
    height: 30,
    width: 160,
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
  }
});
