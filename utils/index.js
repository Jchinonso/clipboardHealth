export const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getJobsAmount = (jobs) => {
  let length = 0;
  jobs.forEach((listing) => {
    length += listing.items.length;
  });
  return length;
};

export const formatInitialis = (value) => {
  return value.substr(0, 2);
};

export const formatDepartments = (dept) => {
  return dept.join().replaceAll(',', ', ');
};