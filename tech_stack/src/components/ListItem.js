import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    let { description } = this.props.library;
    let { expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    let { titleStyle } = styles;
    let { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {

  let expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    expanded: expanded
  }
}

export default connect(mapStateToProps, actions)(ListItem);
