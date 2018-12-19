export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      if (action.payLoad === state) {
        return null;
      }
      return action.payLoad;
    default:
      return state;
  }
}