import React from "react";
import getFiltersAction from "../../actions/getFiltersAction";
import getJobsAction from "../../actions/getJobsAction";
import getSortAction from "../../actions/getSortAction";
import filterReducer from "../../reducers/filterReducer";
import jobsReducer from "../../reducers/jobsReducer";

export const filterContext = React.createContext({
  filters: [],
  jobs: [],
  handleToggle: () => {},
  modalToggle: false,
  filterByJobType: () => {},
  filterByDept: () => {},
  filterBySchedule: () => {},
  filterByExperience: () => {},
  filterBySearch: () => {},
  sortByRole: () => {},
  sortByDept: () => {},
  sortByEduction: () => {},
  sortByLocation: () => {},
  sortByExperience: () => {},
});

const FilterProvider = (props) => {
  const { state: filters, getAllFilters } = getFiltersAction(filterReducer, {
    filters: null,
  });

  const {
    state: jobs,
    getAllJobs,
    getJobsFilteredByJobType,
    getJobsFilteredByDept,
    getJobsFilteredBySchedule,
    getJobsFilteredByExp,
    getJobsFilteredBySearch,
    getSortedArrayByDept,
    getSortedArrayByEducation,
    getSortedArrayByRole,
    getSortedArrayByLocation,
    getSortedArrayByExperience,
  } = getJobsAction(jobsReducer, {
    jobs: null,
    sortby: {
      location: "",
      experience: "",
      department: "",
      required_credentials: "",
      required_skills: "",
    },
  });

  // const {
  //   state: sorts,
  //   getSortedArrayByDept,
  //   getSortedArrayByEducation,
  //   getSortedArrayByRole,
  //   getSortedArrayByLocation,
  //   getSortedArrayByExperience,
  // } = getSortAction(jobsReducer, {
  //   jobs: null,
  // sortby: {
  //   location: "",
  //   experience: "",
  //   department: "",
  //   required_credentials: "",
  //   required_skills: "",
  // },
  // });
  const [modalToggle, setModalToggle] = React.useState(false);

  React.useEffect(async () => {
    await getAllFilters();
    await getAllJobs();
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      filters: filters.filters,
      modalToggle,
      jobs: jobs.jobs,
      sortBy: jobs.sortby,
      handleToggle: setModalToggle,
      filterByJobType: getJobsFilteredByJobType,
      filterByDept: getJobsFilteredByDept,
      filterBySchedule: getJobsFilteredBySchedule,
      filterByExperience: getJobsFilteredByExp,
      filterBySearch: getJobsFilteredBySearch,
      sortByDept: getSortedArrayByDept,
      sortByEduction: getSortedArrayByEducation,
      sortByExperience: getSortedArrayByExperience,
      sortByLocation: getSortedArrayByLocation,
      sortByRole: getSortedArrayByRole,
    };
  }, [filters, jobs, modalToggle]);

  return (
    <filterContext.Provider value={contextValue}>
      {props.children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
