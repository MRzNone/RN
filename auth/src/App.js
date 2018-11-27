import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return (<LoginForm />);
      default:
        return (<Spinner size="large" />);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;