/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NativeModules,
  TextInput,
  Switch,
  View
} from 'react-native';

import Button from 'react-native-button'

const HelloManager = NativeModules.HelloManager;


export default class ModuleNative extends Component {

  componentWillMount() {
    this.setState({ greetingMessage: undefined,
    isAdmin:false });

  }

  greetUserCallback = () => {
    const state = this.state;
    HelloManager.greetUser(state.userName, state.isAdmin, this.displayResult)
  }

  displayResult = (result) => {
    this.refs.userName.blur();
    this.setState({ greetingMessage: result });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="userName"
          autoCorrect={false}
          style={styles.inputField}
          placeholder="User Name"
          onChangeText={(text) => this.setState({ userName: text })} />
        <Text style={styles.label}>Admin</Text>
        <Switch style={styles.radio} onValueChange={(value) => this.setState({ isAdmin: value })}
          value={this.state.isAdmin} />

        <Button
          containerStyle={styles.buttonContainer}
          styles={styles.buttonStyle}
          onPress={this.greetUserCallback}
        >
          Greet (callbak)
               </Button>

        <Text>{this.state.greetingMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  inputField: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NativeCodeCall', () => ModuleNative);

