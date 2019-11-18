import {
  ADD_TO_BASKET, REMOVE_FROM_BASKET
} from '../Constants'

const initialState = []

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        action.item
      ]
    case REMOVE_FROM_BASKET:
      return state.filter(item => item !== action.item)
    default:
      return state;
  }
};

export default basketReducer;

