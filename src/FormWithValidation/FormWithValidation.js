import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView, FlatList, View } from "react-native";
import { RkTextInput, RkButton, RkText } from "react-native-ui-kitten";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  Entypo,
  AntDesign
} from "@expo/vector-icons";

// import Rules from "../FormWithValidation/Rules";
// import Messages from "./Messages";

export default class FormWithValidation extends Component {
  state = {
    errors: [],
    deviceLocale: this.props.deviceLocale || "en", // ex: en, fr
    // rules: Rules, // rules for Validation
    // messages: Messages,
    stateFields: Object.keys(this.props.FieldRules)
  };

  render() {
    // console.log("Index.....", this.state.stateFields);
    const { stateFields } = this.state;
    return (
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="padding"
      >
        <FlatList
          style={styles.form}
          data={this.props.Fields}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <RkTextInput
                label={
                  stateFields[index] === "username" ? (
                    <Ionicons name="md-person" size={30} color="#fff" />
                  ) : stateFields[index] === "email" ? (
                    <Ionicons name="ios-mail" size={30} color="#fff" />
                  ) : stateFields[index] === "phoneNumber" ? (
                    <Ionicons name="md-phone-portrait" size={30} color="#fff" />
                  ) : (
                    <Ionicons name="md-lock" size={30} color="#fff" />
                  )
                }
                onChangeText={value =>
                  this.props.onChangeText(stateFields[index], value)
                }
                value={this.props.getStateValue(stateFields[index])}
                // returnKeyType="next"
                keyboardType={
                  stateFields[index] === "email" ? "email-address" : "default"
                }
                secureTextEntry={
                  stateFields[index].includes("password") ||
                  stateFields[index].includes("Password")
                }
                autoFocus={index === 0}
                rkType="ogin"
                placeholder={item}
              />
              <RkText rkType="medium errorMessage">
                {this.props.getStateValue(`${stateFields[index]}ErrorMessage`)}
              </RkText>
            </View>
          )}
        />
        <RkText style={styles.otherErrorMessages} rkType="medium errorMessage">
          {this.props.getStateValue("cognitoErrorMessage")}
        </RkText>
        <RkButton
          rkType="stretch"
          style={styles.button}
          // contentStyle={{ color: "#fff" }}
          onPress={this.props.submit} //'submit' called from signup/signin
          onPressIn={this.props.nav}
        >
          {this.props.button}
          {/* //button called from signin and SignUp */}
        </RkButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  form: {
    marginTop: 30
  },
  otherErrorMessages: {
    marginBottom: 20
  },
  button: {
    backgroundColor: "#255E76",
    marginHorizontal: "15%",
    marginBottom: 40
  }
});
