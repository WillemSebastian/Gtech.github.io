import { ADD_TO_CART } from "../../helpers/actionTypes";

export function addToCart(data) {
  //we will return mock result because we are using dummy api
  return async dispatch => {
    try {
      if (data.count === 0) {
        //do nothing because there no addition
      } else {
        const url = "https://api.company.id/api/homepage";
        let header = new Headers({
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        });
        const response = await fetch(url, {
          method: "GET",
          header: header
        });
        dispatch({
          type: ADD_TO_CART,
          payload: {
            data: data.product,
            count: data.count
          }
        });
      }
    } catch (error) {
      if (data.count === 0) {
        //do nothing because there no addition
      } else {
        dispatch({
          type: ADD_TO_CART,
          payload: {
            data: data.product,
            count: data.count
          }
        });
      }
    }
  };
}
