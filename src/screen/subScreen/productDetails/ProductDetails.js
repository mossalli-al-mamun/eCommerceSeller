import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Left, Body, Right } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productDetails } from "../../../redux/actions";
// import { addProducts } from "../../../redux/actions";

import HeaderLeft from "../../../header/productDetails/HeaderLeft";
import HeaderCenter from "../../../header/productDetails/HeaderCenter";
import HeaderRight from "../../../header/productDetails/HeaderRight";

class ProductDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header
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
        </Header> */}
        <Header style={styles.HeaderStyle}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AllProducts")}
            >
              <MaterialIcons name="chevron-left" size={30} color={"#fff"} />
            </TouchableOpacity>
          </Left>

          <Body
            style={{
              paddingLeft: 30,
              alignItems: "flex-end",
              width: 120,
              backgroundColor: "red"
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              Product
            </Text>
          </Body>

          <Right style={{ width: 10 }} />
        </Header>
        <Text>Product Details!</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log("Hello Product....", state.product.productDetails);
  return {
    ProductState: state.product.productDetails
  };
}

export default connect(
  mapStateToProps,
  null
)(ProductDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  HeaderStyle: {
    height: 40,
    backgroundColor: "#255E76",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
