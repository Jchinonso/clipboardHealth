import React from "react";
import JobListing from "./JobListing";
import { filterContext } from "../components/Hooks/FilterProvider";
import { formatNumber, getJobsAmount } from "../utils";
import SortButton from "./SortButton";

const MainSection = React.memo(() => {
  const value = React.useContext(filterContext);
  const [sortState, setSortState] = React.useState({
    location: "",
    role: "",
    department: "",
    education: "",
    experience: "",
  });

  const sortHandler = (sortType, handler) => {
    const state = sortState[sortType];
    let order;
    if (!state) order = "asc";
    if (state === "asc") order = "desc";
    if (state === "desc") order = "";
    setSortState({
      ...sortState,
      [sortType]: order,
    });

    if (order) {
      handler({ sortBy: `${sortType}:${order}` });
    }
  };

  return (
    <div className="flex flex-col flex-1 p-4 bg-white border border-gray-200 text-xs">
      <div className="flex justify-between mb-6 mt-4">
        <div>
          <span className="font-bold">
            {value.jobs && formatNumber(getJobsAmount(value.jobs.jobs))}
          </span>{" "}
          <span>job postings</span>
        </div>
        <div className="hidden lg:flex">
          <span className="text-gray-400 mr-2">Sort by</span>
          <SortButton
            name="Location"
            onClick={() => sortHandler("location", value.sortByLocation)}
            sortState={sortState["location"]}
          />
          <SortButton
            name="Role"
            onClick={() => sortHandler("required_skills", value.sortByRole)}
            sortState={sortState["required_skills"]}
          />
          <SortButton
            name="Department"
            onClick={() => sortHandler("department", value.sortByDept)}
            sortState={sortState["department"]}
          />
          <SortButton
            name="Education"
            onClick={() =>
              sortHandler("required_credentials", value.sortByEduction)
            }
            sortState={sortState["required_credentials"]}
          />
          <SortButton
            name="Experience"
            onClick={() => sortHandler("experience", value.sortByExperience)}
            sortState={sortState["experience"]}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {value.jobs &&
          value.jobs.jobs.map((listing) => (
            <JobListing
              key={listing.name}
              name={listing.name}
              positions={listing.items.length}
              list={listing.items}
            />
          ))}
      </div>
    </div>
  );
});

export default MainSection;
