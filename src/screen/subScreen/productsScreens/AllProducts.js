import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button
} from "native-base";

//dada
import { WomenList, ManList } from "../../../data/Data";

//Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addProducts } from "../../../redux/actions";

type Props = {
  addProductList: (value: []) => void,
  ProductState: any
};
class AllProducts extends React.Component {
  scrollref = null;
  state = {
    enable: false,
    enable2: true,
    isModalVisible: false,
    starCount: 3.5,
    activeSections: [],
    query: "",
    results: []
  };

  componentDidMount() {
    // console.log("PRINT IN %s=====>", "Test");
    this.props.addProductList(ManList);
  }
  // componentDidUpdate() {
  //   console.log("PRINT IN %s=====>", "Hello");
  // }

  render() {
    return (
      <View>
        <ScrollView ref={ref => (this["ScrollView"] = ref)}>
          {this.props.productList &&
            this.props.productList.map((product, index) => {
              return (
                <List key={index}>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={{
                          uri: product.image[0]
                        }}
                      />
                    </Left>
                    <Body>
                      <Text style={{ fontWeight: "bold" }}>
                        {product.title}
                      </Text>
                      <Text style={{ color: "red" }}>
                        Price: {product.price}/-
                      </Text>
                      <Text note numberOfLines={1}>
                        {product.description}
                      </Text>
                    </Body>
                    <Right>
                      <Button
                        transparent
                        onPress={() => this.props.product_details(index)}
                        onPressIn={() =>
                          this.props.navigation.navigate("ProductDetails")
                        }
                        onPre
                      >
                        <Text style={{ color: "blue" }}>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log("Pr....", state.product.productList);
  return {
    productList: state.product.productList
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addProductList: (list: []) => addProducts(list),
    product_details: (index: string) => productDetails(index)
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
