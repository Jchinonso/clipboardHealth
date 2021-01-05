// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from "../../data/jobs.json";
import JobService from "./services/jobService";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));
  let jobService = new JobService(jobs);
  try {
    if (req.query.filter) {
      const queryStringArray = req.query.filter.split(":");
      let result = jobService.filterBy(
        queryStringArray[0].trim(),
        decodeURIComponent(queryStringArray[1].trim())
      ).jobs;
      res.json({ jobs: result });
    } else if (req.query.sortBy) {
      let result = jobService.sortBy(req.query.sortBy).jobs;
      res.json({ jobs: result });
    } else if (req.query.search) {
      let result = jobService.search(decodeURIComponent(req.query.search)).jobs;
      res.json({ jobs: result });
    } else {
      res.json({ jobs });
    }
  } catch (e) {
    console.log(e);
    res.json({ jobs });
  }
};
