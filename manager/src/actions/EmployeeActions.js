import { EMPLOYEE_ADD_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return ({
    type: EMPLOYEE_ADD_UPDATE,
    payLoad: { prop, value }
  });
}