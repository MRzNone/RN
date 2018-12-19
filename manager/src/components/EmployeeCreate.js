import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { employeeUpdate } from '../actions/'

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='name'
            value={this.props.name}
            onChangeText={(text) => { this.props.employeeUpdate({ prop: 'name', value: text }); }}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={(text) => { this.props.employeeUpdate({ prop: 'phone', value: text }); }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(day) => { this.props.employeeUpdate({ prop: 'shift', value: day }) }}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wendesday' value='Wendesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

function mapStateToPros(state) {
  return ({
    phone: state.employeeForm.phone,
    name: state.employeeForm.name,
    shift: state.employeeForm.shift,
  });
}

export default connect(mapStateToPros, { employeeUpdate })(EmployeeCreate);
