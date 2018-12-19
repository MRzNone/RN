import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyB1ngD6RYdmW1l4z9Je-jSWKiYAB5ANEDk',
      authDomain: 'test-377bd.firebaseapp.com',
      databaseURL: 'https://test-377bd.firebaseio.com',
      projectId: 'test-377bd',
      storageBucket: 'test-377bd.appspot.com',
      messagingSenderId: '486134839902'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider >
    );
  }
}

export default App;
