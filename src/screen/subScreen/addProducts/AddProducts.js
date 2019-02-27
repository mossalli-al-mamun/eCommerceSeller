import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { ImagePicker, Camera, Permissions } from "expo";
import { AsyncStorage } from "react-native";
import {
  Toast,
  Col,
  Row,
  Grid,
  Picker,
  Item,
  Input,
  Label,
  Form
} from "native-base";

import HeaderCenter from "../../../header/addProducts/HeaderCenter";
import HeaderLeft from "../../../header/addProducts/HeaderLeft";
import HeaderRight from "../../../header/addProducts/HeaderRight";
import { RkText, RkTheme, RkTextInput } from "react-native-ui-kitten";
import { Dropdown } from "react-native-material-dropdown";

//dada
import { ManList } from "../../../data/Data";

// import FormWithValidation from "../../../FormWithValidation/FormWithValidation";

var { width } = Dimensions.get("window");

class AddProducts extends React.Component {
  state = {
    showToast: false,
    image: null,
    images: [],
    selected: undefined
  };

  //>>>>>>>>>==========Image Pick By ImagePicker============<<<<<<<<<<<<

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log("Hello " + result.id);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  // >>>>>>>>>==========Push Picked Image Into Images============<<<<<<<<<<<<
  _pushIntoImages = uri => {
    let image = this.state.image;
    let images = this.state.images;

    if (image === null) {
      ToastAndroid.show("Select Image First !", ToastAndroid.SHORT);
    } else {
      images.push(uri);
      this.setState({
        images: images.filter((val, id, array) => array.indexOf(val) == id)
      });
      // ToastAndroid.show("Image Added Successfully !", ToastAndroid.SHORT);
    }
  };

  // >>>>>>>>>==========Picker Value (Drop Down)============<<<<<<<<<<<<
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    // console.log("My Images " + this.state.images);
    let catagory = [
      {
        value: "Shirt"
      },
      {
        value: "Pant"
      },
      {
        value: "Shari"
      }
    ];
    return (
      <View style={styles.container}>
        <Header
          // statusBarProps={{ barStyle: "dark-content", color: "red" }}
          placement="center"
          containerStyle={styles.headerContainer}
        >
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </Header>
        <KeyboardAvoidingView style={styles.imageView} behavior="padding">
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.imageInnerView}>
              <Avatar
                source={{ uri: this.state.image }}
                size="xlarge"
                showEditButton
                onPress={this._pickImage}
                onEditPress={this._pickImage}
              />

              {/* <Badge
              badgeStyle={{ backgroundColor: "white" }}
              value={<Feather name={"camera"} size={25} />}
              containerStyle={styles.badgeContainer}
              onPress={this._pickImage}
            /> */}
            </View>
            <View style={{ marginTop: 7 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this._pushIntoImages(this.state.image)}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  ADD IMAGE
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <ScrollView horizontal="true">
                {this.state.images.map((image, index) => {
                  return (
                    <View key={index} style={{ padding: 2 }}>
                      <Avatar
                        source={{ uri: image }}
                        size="large"
                        onPress={() => this.setState({ image: image })}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={{ width: width * 0.92, marginBottom: 10 }}>
              {/* <RkTextInput placeholder="Product ID" /> */}
              {/* <Form>
                <Item floatingLabel>
                  <Label>Product Title</Label>
                  <Input multiline={true} />
                </Item>
                <Item floatingLabel>
                  <Label>Price</Label>
                  <Input multiline={true} />
                </Item>
              </Form> */}

              <RkTextInput placeholder="Product Title" />
              <RkTextInput placeholder="Price" />

              <Grid>
                <Col style={styles.cols}>
                  <Row style={styles.sizeRow}>
                    <Text style={{ fontSize: 15 }}>Size</Text>
                  </Row>
                  <Row style={styles.quantityRow}>
                    <Text style={{ fontSize: 14 }}>Quantity</Text>
                  </Row>
                </Col>
                <Col style={styles.cols}>
                  <Row style={styles.sizeRow}>
                    <Text>XL</Text>
                  </Row>
                  <Row style={styles.quantityRow}>
                    <TextInput
                      // style={styles.tableTextInput}
                      placeholder="Number"
                      keyboardType="default"
                    />
                  </Row>
                </Col>
                <Col style={styles.cols}>
                  <Row style={styles.sizeRow}>
                    <Text>L</Text>
                  </Row>
                  <Row style={styles.quantityRow}>
                    <TextInput
                      // style={styles.tableTextInput}
                      placeholder="Number"
                      keyboardType="numeric"
                    />
                  </Row>
                </Col>
                <Col style={styles.cols}>
                  <Row style={styles.sizeRow}>
                    <Text>M</Text>
                  </Row>
                  <Row style={styles.quantityRow}>
                    <TextInput
                      // style={styles.tableTextInput}
                      placeholder="Number"
                      keyboardType="numeric"
                    />
                  </Row>
                </Col>
                <Col style={styles.colsLast}>
                  <Row style={styles.sizeRow}>
                    <Text>S</Text>
                  </Row>
                  <Row style={styles.quantityRow}>
                    <TextInput
                      // style={styles.tableTextInput}
                      placeholder="Number"
                      keyboardType="numeric"
                    />
                  </Row>
                </Col>
              </Grid>
              <Dropdown
                containerStyle={{
                  height: 65,
                  marginTop: -8,
                  paddingLeft: 15,
                  paddingRight: 15
                }}
                label="Catagory"
                data={catagory}
              />
              <RkTextInput placeholder="Descriptions" multiline={true} />
            </View>
            <View style={{ marginTop: 7, marginBottom: 10 }}>
              <TouchableOpacity
                style={styles.buttonSave}
                // onPress={() => this._pushIntoImages(this.state.image)}
              >
                <Text
                  style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}
                >
                  SAVE
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default AddProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    paddingTop: 45,
    // justifyContent: "center"
    alignItems: "center"
  },
  imageInnerView: {
    // width: 70,
    marginTop: -40
  },
  headerContainer: {
    backgroundColor: "#255E76",
    height: 45,
    paddingTop: 0
  },
  // badgeContainer: {
  //   position: "absolute",
  //   top: 50,
  //   right: -14
  // },
  button: {
    backgroundColor: "#255E76",
    height: 30,
    width: 120,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 10
  },
  buttonSave: {
    backgroundColor: "#255E76",
    height: 35,
    width: width * 0.83,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 10
  },
  imageContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    height: 82,
    width: width * 0.98,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5
  },
  cols: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "black",
    height: 60
  },
  colsLast: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "black",
    height: 60
  },
  sizeRow: {
    borderBottomWidth: 1,
    borderColor: "black",
    height: 30,
    width: undefined,
    alignItems: "center",
    justifyContent: "center"
  },
  quantityRow: {
    borderColor: "black",
    height: 30,
    // width: undefined,
    alignItems: "center",
    justifyContent: "center"
  },
  tableTextInput: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});
