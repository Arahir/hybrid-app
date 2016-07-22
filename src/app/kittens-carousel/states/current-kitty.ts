export const currentKitty = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_KITTY':
      return action.payload.index;
    default:
      return state;
  }
};
