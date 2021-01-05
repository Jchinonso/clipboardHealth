import React from "react";
import { formatNumber } from "../utils";
import { filterContext } from "../components/Hooks/FilterProvider";
import { throttle } from "lodash";

const TIME_INTERVAL = 1000;

const DepartmentModal = React.memo(() => {
  const value = React.useContext(filterContext);
  return (
    <div
      className="absolute flex h-full w-full bg-black bg-opacity-25"
      style={{ visibility: value.modalToggle ? "visible" : "hidden" }}
    >
      <div className="fixed flex h-screen w-full justify-center items-center">
        <div className="flex flex-col w-3/4 bg-white rounded shadow-xl">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-medium">Department</span>
            <button
              onClick={() => value.handleToggle(!value.modalToggle)}
              className="w-3 h-4 focus:outline-none"
              aria-label="department"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
                <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
              </svg>
            </button>
          </div>
          <div className="border-b border-gray-200" />
          <div className="flex flex-wrap justify-between p-4 text-xs">
            {value.filters &&
              value.filters.department.map((dept) => (
                <a
                  key={dept.key}
                  className="w-1/4 break-words m-2"
                  href="#job"
                  onClick={throttle(
                    () =>
                      value.filterByDept({
                        filter: `department: ${encodeURIComponent(dept.key)}`,
                      }),
                    TIME_INTERVAL
                  )}
                >
                  <span className="mr-2">{dept.key}</span>
                  <span className="text-gray-400">
                    {formatNumber(dept.doc_count)}
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default DepartmentModal;
