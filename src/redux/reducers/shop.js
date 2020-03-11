import { GET_CLOTHES } from "../../helpers/actionTypes";

const initialState = {
  banners: [],
  promotions: [],
  newProducts: [],
  favourites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES: {
      return {
        ...state,
        newProducts: action.payload.data[0].newProducts,
        favourites: action.payload.data[0].favourites,
        promotions: action.payload.data[0].promotions,
        banners: action.payload.data[0].banners
      };
    }
    default:
      return state;
  }
}
