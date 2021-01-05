class JobService {
  constructor(jobs) {
    this.jobs = jobs;
    this.filters = ["work_schedule", "department", "experience", "job_type"];
  }

  payload(job, filteredItem) {
    return {
      total_jobs_in_hospital: job.total_jobs_in_hospital,
      name: job.name,
      job_title: job.job_title,
      items: filteredItem,
    };
  }

  filterBy(filterString, queryString) {
    if (
      !queryString ||
      queryString === "" ||
      !this.filters.includes(filterString)
    ) {
      return this;
    } else {
      this.jobs = this.jobs.map((job) => {
        const filteredItem = job.items.filter((item) => {
          if (Array.isArray(item[filterString])) {
            return item[filterString]
              .map((item) => item.toLowerCase())
              .includes(queryString.toLowerCase());
          } else {
            return (
              item[filterString].toLowerCase() === queryString.toLowerCase()
            );
          }
        });
        return this.payload(job, filteredItem);
      });

      return this;
    }
  }

  sortBy(queryString) {
    if (!Array.isArray(queryString)) {
      const splittedArr = queryString.split(":");
      this.jobs = this.sortSingle(splittedArr);
      return this;
    }
  }

  sortSingle(splittedArr) {
    return this.jobs
      .map((job) => {
        let sortedItems = job.items.sort((a, b) => {
          return this.orderBy(
            splittedArr[1],
            a[splittedArr[0]],
            b[splittedArr[0]]
          );
        });
        return this.payload(job, sortedItems);
      })
      .sort((a, b) => {
        return this.orderBy(
          splittedArr[1],
          a.items[0][splittedArr[0]],
          b.items[0][splittedArr[0]]
        );
      });
  }

  orderBy(order, a, b) {
    if (order === "asc") {
      return a > b ? 1 : -1;
    } else if (order === "desc") {
      return b > a ? 1 : -1;
    }
  }

  search(search) {
    const searchString = search && search.toLowerCase().trim();
    if (!searchString || searchString === "") {
      return this;
    } else {
      this.jobs = this.jobs.map((job) => {
        const filteredItem = [];
        const ids = [];
        job.items.forEach((record) => {
          for (let key in record) {
            if (Array.isArray(record[key])) {
              if (
                record[key]
                  .map((item) => item.toString().toLowerCase().trim())
                  .indexOf(searchString) > -1 &&
                !ids.includes(record["job_id"])
              ) {
                filteredItem.push(record);
                ids.push(record["job_id"]);
              }
            } else {
              if (
                record[key].toString().toLowerCase().indexOf(searchString) >
                  -1 &&
                !ids.includes(record["job_id"])
              ) {
                filteredItem.push(record);
                ids.push(record["job_id"]);
              }
            }
          }
        });
        return this.payload(job, filteredItem);
      });

      return this;
    }
  }
}

export default JobService;
