import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
