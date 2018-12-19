import { EMPLOYEE_ADD_UPDATE } from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  // action = {prop: value}
  switch (action.type) {
    case EMPLOYEE_ADD_UPDATE:
      return { ...state, [action.payLoad.prop]: action.payLoad.value };
    default:
      return state;
  }
}