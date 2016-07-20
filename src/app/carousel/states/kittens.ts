export const kittens = (state = [], action) => {
  switch (action.type) {
    case 'KITTENS_LOADED':
      return action.payload;
    default:
      return state;
  }
};
