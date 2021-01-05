import {
  GET_JOBS_BY_JOBTYPE,
  GET_JOBS,
  GET_JOBS_BY_DEPT,
  GET_JOBS_BY_SCHEDULE,
  GET_JOBS_BY_EXPERIENCE,
  GET_JOBS_BY_SEARCH,
  GET_SORTED_ARRAY_BY_DEPT,
  GET_SORTED_ARRAY_BY_EDUCATION,
  GET_SORTED_ARRAY_BY_ROLE,
  GET_SORTED_ARRAY_BY_LOCATION,
  GET_SORTED_ARRAY_BY_EXPERIENCE,
} from "../contants/actionTypes";

const jobsReducer = (state, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_JOBS_BY_JOBTYPE: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_JOBS_BY_DEPT: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_JOBS_BY_SCHEDULE: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_JOBS_BY_EXPERIENCE: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_JOBS_BY_SEARCH: {
      return { ...state, jobs: { ...action.payload } };
    }
    case GET_SORTED_ARRAY_BY_DEPT: {
      return {
        ...state,
        jobs: { ...action.payload },
      };
    }
    case GET_SORTED_ARRAY_BY_EDUCATION: {
      return {
        ...state,
        jobs: { ...action.payload },
      };
    }
    case GET_SORTED_ARRAY_BY_ROLE: {
      return {
        ...state,
        jobs: { ...action.payload },
      };
    }
    case GET_SORTED_ARRAY_BY_LOCATION: {
      return {
        ...state,
        jobs: { ...action.payload },
      };
    }
    case GET_SORTED_ARRAY_BY_EXPERIENCE: {
      return {
        ...state,
        jobs: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};

export default jobsReducer;
