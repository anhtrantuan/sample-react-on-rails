const counter = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER_INCREASE':
      return state + 1;
    case 'COUNTER_DECREASE':
      if (state === 0) return state;
      return state - 1;
    default:
      return state;
  }
};

export default counter;
