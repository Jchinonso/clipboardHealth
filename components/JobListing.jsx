import React, { useState } from "react";
import { formatInitialis } from "../utils";
import JobDescription from "./JobDescription";

const JobListing = React.memo(({ positions, name, list }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {positions > 0 ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex m-2 focus:outline-none"
          aria-label="listing"
        >
          <div className="flex items-center">
            <div className="flex uppercase rounded-lg justify-center items-center bg-gray-300">
              <span className="w-8 h-8 text-white text-lg font-medium flex items-center justify-center">
                {formatInitialis(name)}
              </span>
            </div>

            <span className="ml-3 text-left break-words">
              {positions} jobs for {name}
            </span>
          </div>
        </button>
      ) : null}
      {isExpanded && (
        <div className="flex flex-col w-full">
          {list.map((listing, index) => (
            <JobDescription
              key={index}
              title={listing.job_title}
              job_type={listing.job_type}
              salary_range={listing.salary_range}
              city={listing.city}
              summary={listing.description}
              department={listing.department}
              hours={listing.hours}
              created={listing.created}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default JobListing;
