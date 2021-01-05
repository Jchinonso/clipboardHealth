import { useReducer } from "react";
import axios from "axios";
import * as types from "../contants/actionTypes";
import { sortBy } from "../utils";

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
  const getSortedArrayByLocation = (sortType, order, array) => {
    try {
      const response = sortBy(sortType, order, array);
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_LOCATION,
        payload: { jobs: response },
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByRole = (sortType, order, array) => {
    try {
      const response = sortBy(sortType, order, array);
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_ROLE,
        payload: { jobs: response },
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByDept = (sortType, order, array) => {
    try {
      const response = sortBy(sortType, order, array);
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_DEPT,
        payload: { jobs: response },
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByEducation = (sortType, order, array) => {
    try {
      const response = sortBy(sortType, order, array);
      dispatch({
        type: types.GET_SORTED_ARRAY_BY_EDUCATION,
        payload: { jobs: response },
      });
    } catch (e) {
      throw e;
    }
  };

  const getSortedArrayByExperience = (sortType, order, array) => {
    try {
      const response = sortBy(sortType, order, array);
      dispatch({
        type: types.GET_JOBS_BY_EXPERIENCE,
        payload: { jobs: response },
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
