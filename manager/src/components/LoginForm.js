import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanegd, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanegd(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  login() {
    this.props.loginUser({ email: this.props.email, password: this.props.password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderLoading() {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size={'large'} />
        </CardSection>
      );
    }
    return (
      <CardSection>
        <Button onPress={this.login.bind(this)}>
          Login
        </Button>
      </CardSection>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'email@email.com'}
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            placeholder={'password'}
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
          />
        </CardSection>

        {this.renderError()}

        {this.renderLoading()}

      </Card >
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProp = (state) => {
  return ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  });
}

export default connect(mapStateToProp, { emailChanegd, passwordChanged, loginUser })(LoginForm);