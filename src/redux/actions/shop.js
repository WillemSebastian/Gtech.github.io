import { GET_CLOTHES } from "../../helpers/actionTypes";
import { mockResult } from "../../helpers/api";

export function getClothes(value) {
  //we will return mock result because we are using dummy api
  return async dispatch => {
    try {
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
        type: GET_CLOTHES,
        payload: {
          data: mockResult
        }
      });
    } catch (error) {
      dispatch({
        type: GET_CLOTHES,
        payload: {
          data: mockResult.data
        }
      });
    }
  };
}
