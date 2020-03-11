import { ADD_TO_CART } from "../../helpers/actionTypes";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      var state = { ...state };
      if (state.products.includes(action.payload.data)) {
        state.products.count = state.products.count + action.payload.count;
      } else {
        action.payload.data["count"] = action.payload.count;
        state.products.push(action.payload.data);
      }
      return {
        ...state,
        state
      };
    }
    default:
      return state;
  }
}
