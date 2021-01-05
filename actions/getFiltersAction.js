import { useReducer } from "react";
import axios from "axios";
import * as types from "../contants/actionTypes";



const getFiltersAction = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllFilters = async () => {
    try {
      const filters = await axios('/api/filters');
      dispatch({
        type: types.GET_FILTERS,
        payload: filters.data,
      });
    } catch (e) {
      throw e;
    }
  };

  return { state, getAllFilters };
};

export default getFiltersAction;