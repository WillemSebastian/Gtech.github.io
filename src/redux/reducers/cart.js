import { ADD_TO_CART } from "../../helpers/actionTypes";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      var updatedState = { ...state };
      if (updatedState.products.includes(action.payload.data)) {
        updatedState.products.count =
          state.products.count + action.payload.count;
      } else {
        action.payload.data["count"] = action.payload.count;
        updatedState.products.push(action.payload.data);
      }
      return {
        ...state,
        updatedState
      };
    }
    default:
      return state;
  }
}
