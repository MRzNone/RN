import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  UNSAFE_componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyB1ngD6RYdmW1l4z9Je-jSWKiYAB5ANEDk",
      authDomain: "test-377bd.firebaseapp.com",
      databaseURL: "https://test-377bd.firebaseio.com",
      projectId: "test-377bd",
      storageBucket: "test-377bd.appspot.com",
      messagingSenderId: "486134839902"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;