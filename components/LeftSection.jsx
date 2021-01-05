import React from "react";
import { throttle } from "lodash";
import { filterContext } from "../components/Hooks/FilterProvider";
import FilterButton from "../components/FilterButton";

const TIME_INTERVAL = 1000;

const LeftSection = React.memo(() => {
  const value = React.useContext(filterContext);

  return (
    <div className="hidden lg:flex flex-col w-64 mr-5">
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">JOB TYPE</span>
        <ul className="mt-2">
          {value.filters &&
            value.filters.job_type.map((job) => (
              <FilterButton
                key={job.key}
                title={job.key}
                count={job.doc_count}
                onClick={throttle(
                  () =>
                    value.filterByJobType({
                      filter: `job_type: ${encodeURIComponent(job.key)}`,
                    }),
                  TIME_INTERVAL
                )}
              />
            ))}
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">DEPARTMENT</span>
        <ul className="mt-2">
          {value.filters &&
            value.filters.department.slice(0, 9).map((job) => (
              <FilterButton
                key={job.key}
                title={job.key}
                count={job.doc_count}
                onClick={throttle(
                  () =>
                    value.filterByDept({
                      filter: `department: ${encodeURIComponent(job.key)}`,
                    }),
                  TIME_INTERVAL
                )}
              />
            ))}
          <li className="mt-2">
            <button
              className="border-b border-transparent hover:border-blue-500 text-blue-500 focus:outline-none"
              onClick={() => value.handleToggle(!value.modalToggle)}
              aria-label="button"
            >
              Show more
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">WORK SCHEDULE</span>
        <ul className="mt-2">
          {value.filters &&
            value.filters.work_schedule.map((job) => (
              <FilterButton
                key={job.key}
                title={job.key}
                count={job.doc_count}
                onClick={throttle(
                  () =>
                    value.filterBySchedule({
                      filter: `work_schedule: ${encodeURIComponent(job.key)}`,
                    }),
                  TIME_INTERVAL
                )}
              />
            ))}
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">EXPERIENCE</span>
        <ul className="mt-2">
          {value.filters &&
            value.filters.experience.map((job) => (
              <FilterButton
                key={job.key}
                title={job.key}
                count={job.doc_count}
                onClick={throttle(
                  () =>
                    value.filterByExperience({
                      filter: `experience: ${encodeURIComponent(job.key)}`,
                    }),
                  TIME_INTERVAL
                )}
              />
            ))}
        </ul>
      </div>
    </div>
  );
});

export default LeftSection;
