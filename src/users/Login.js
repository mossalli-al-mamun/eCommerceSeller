import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  ImageBackground,
  ToastAndroid
} from "react-native";
import { RkText, RkTheme } from "react-native-ui-kitten";
// import { Auth } from "aws-amplify";
import FormWithValidation from "../FormWithValidation/FormWithValidation";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import {
//   StorageKey,
//   stateKey,
//   userAttributes,
//   actionTypes
// } from "../../staticData/constant";
// import Client from "aws-appsync";
// import AppSyncconfig from "../../../AppSync (2)";
// import loadingUserCheck from "../AppNavigator/MainNavigator/Loading/loadingService";
// import logError, {
//   logText
// } from "../AppNavigator/MainNavigator/Service/logColorPrint";
// import { clientGenerate } from "./authService";
// import { store } from "../AppNavigator/MainNavigator/Home";
// import { addCognitoAttributes } from "../../redux/action";
// import background from '../../../assets/background.png';

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    loading: false,
    username: "",
    password: "",
    usernameErrorMessage: "",
    passwordErrorMessage: "",
    cognitoErrorMessage: "",
    user: {}
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  getStateValue = key => this.state[key];

  setStateValue = (key, value) => this.setState({ [key]: value });

  // signIn = () => {
  //   this.setState({ loading: true });
  //   const _that = this;
  //   const { username, password } = this.state;
  //   Auth.signIn(username, password)
  //     .then(async user => {
  //       this.setState({ user });
  //       _that.props.screenProps.setUserId(username);
  //       Auth.currentAuthenticatedUser().then(response => {
  //         store.dispatch(addCognitoAttributes(response.attributes));
  //         if (
  //           response.attributes["custom:firstName"] &&
  //           response.attributes["custom:lastName"]
  //         ) {
  //           AsyncStorage.multiSet([
  //             [StorageKey.firstName, response.attributes["custom:firstName"]],
  //             [StorageKey.lastName, response.attributes["custom:lastName"]]
  //           ]);
  //         }
  //       });
  //       _that.props.screenProps.client = await clientGenerate();
  //       Auth.currentSession()
  //         .then(async res => {
  //           AsyncStorage.multiSet([
  //             [StorageKey.jwtToken, res.accessToken.jwtToken],
  //             [StorageKey.userId, username],
  //             [StorageKey.password, password],
  //             [StorageKey.loggedIn, "true"]
  //           ]);
  //           // _that.props.screenProps.client = new Client({
  //           //   url: AppSyncconfig.graphqlEndpoint,
  //           //   region: AppSyncconfig.region,
  //           //   auth: {
  //           //     type: AppSyncconfig.authenticationType,
  //           //     apiKey: AppSyncconfig.apiKey,
  //           //     jwtToken: res.accessToken.jwtToken,
  //           //   },
  //           // });
  //           // this.props.screenProps.authenticate(true);
  //           await loadingUserCheck(_that.props.screenProps.client, username);
  //           _that.props.screenProps.setUserId(username);
  //           // _that.props.navigation.navigate('Home');
  //           // apolloClient
  //           //   .query({
  //           //     query: getUser,
  //           //     variables: { id: 'user.rakin2' },
  //           //   })
  //           //   .then(res => {
  //           //     console.log(res);
  //           //   })
  //           //   .catch(e => console.log(e));
  //         })
  //         .catch(e => logError("Current session error ", e));
  //       _that.props.navigation.navigate("Home", {
  //         [stateKey.AUTHENTICATE_STATE]: true
  //       });
  //     })
  //     .catch(e => {
  //       logError("Error in logging ", e);

  //       this.setState({
  //         cognitoErrorMessage: "Username - or Password is incorrect.",
  //         loading: false
  //       });
  //     });
  // };

  signIn = () => {
    if (
      this.state.username == this.props.loger.username &&
      this.state.password == this.props.loger.password
    ) {
      this.props.navigation.navigate("Home");
    } else if (
      this.props.loger.username &&
      this.props.loger.username == " " &&
      this.props.loger.password &&
      this.props.loger.password == " "
    ) {
      ToastAndroid.show(
        "You are not a valid user. Please Signup!",
        ToastAndroid.SHORT
      );
    } else {
      ToastAndroid.show(
        "User Name or Password Does Not Match!",
        ToastAndroid.SHORT
      );
    }
  };

  render() {
    // console.log("Log hi", this.props.loger.username);
    const FieldRules = {
      username: {
        required: true
      },
      password: {
        required: true
      }
    };
    const Fields = ["Username", "Password"];
    const Label = [""];

    return (
      <View style={styles.container}>
        <View
          style={{ height: 80, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>
            Facebook Login
          </Text>
        </View>
        {this.state.loading ? (
          <View style={{ marginVertical: 30 }}>
            <ActivityIndicator color="red" size="large" />
          </View>
        ) : (
          <FormWithValidation
            label={<Ionicons name="md-person" size={30} color="#fff" />}
            FieldRules={FieldRules}
            Fields={Fields}
            onChangeText={this.onChangeText}
            getStateValue={this.getStateValue}
            setStateValue={this.setStateValue}
            submit={this.signIn}
            button="Login"
          />
        )}
        {!this.state.loading && (
          <RkText
            style={styles.bottom1}
            // rkType="small black left"
            // onPress={() => this.props.navigation.navigate("ForgetPassword")}
          >
            Forget Password?
          </RkText>
        )}
        {!this.state.loading && (
          <View style={styles.bottom}>
            <RkText rkType="medium black">Don't have account?</RkText>
            <RkText
              rkType="medium black"
              style={styles.signin}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              Sign Up
            </RkText>
          </View>
        )}
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
    padding: 30,
    flex: 1
    // backgroundColor: '#000',
  },
  bottom: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom1: {
    marginTop: -30,
    color: "blue",
    textAlign: "right"
  },
  signin: {
    fontWeight: "bold",
    marginLeft: 5
  }
});
