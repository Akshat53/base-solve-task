import * as actions from "./actionTypes";
import { getRegionsData } from "../services/locationServices";

export const getRegionsDataAction = (regionName) => async (dispatch) => {
  const response = await getRegionsData(regionName);
  dispatch({
    type: actions.SET_COUNTRY_LIST,
    payload: response,
  });
  return response.data;
};

export const selectLocationAction = (value) => async (dispatch) => {
  dispatch({
    type: actions.SELECT_LOCATION,
    payload: value,
  });
}

export const updateLocationAction = (obj) => async (dispatch) => {
  dispatch({
    type: actions.UPDATE_LOCATION,
    payload: obj,
  });
}

export const updateSelectedLocationAction = (val) => async dispatch => {
  dispatch({
    type: actions.MODIFY_LOCATION,
    payload: val,
  });
}