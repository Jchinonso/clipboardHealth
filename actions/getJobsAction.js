import { useReducer } from "react";
import axios from "axios";
import * as types from "../contants/actionTypes";

const JOB_URL = "/api/jobs";

const getJobsAction = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllJobs = async () => {
    try {
      const response = await axios.get(JOB_URL);
      dispatch({
        type: types.GET_JOBS,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };

  const getJobsFilteredByJobType = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_JOBTYPE,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };

  const getJobsFilteredByDept = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_DEPT,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };

  const getJobsFilteredBySchedule = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_SCHEDULE,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };

  const getJobsFilteredByExp = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_EXPERIENCE,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };

  const getJobsFilteredBySearch = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_SEARCH,
        payload: response.data,
      });
    } catch (e) {
      throw e;
    }
  };
  const getSortedArrayByLocation = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_LOCATION,
        payload: response.data,
        queryString: params.sortBy,
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByRole = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_ROLE,
        payload: response.data,
        queryString: params.sortBy,
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByDept = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_DEPT,
        payload: response.data,
        queryString: params.sortBy,
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByEducation = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_EDUCATION,
        payload: response.data,
        queryString: params.sortBy,
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByExperience = async (params) => {
    try {
      const response = await axios.get(JOB_URL, { params });
      dispatch({
        type: types.GET_JOBS_BY_EXPERIENCE,
        payload: response.data,
        queryString: params.sortBy,
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    state,
    getAllJobs,
    getSortedArrayByDept,
    getSortedArrayByEducation,
    getSortedArrayByLocation,
    getSortedArrayByRole,
    getSortedArrayByExperience,
    getJobsFilteredByJobType,
    getJobsFilteredByDept,
    getJobsFilteredBySchedule,
    getJobsFilteredByExp,
    getJobsFilteredBySearch,
  };
};

export default getJobsAction;
