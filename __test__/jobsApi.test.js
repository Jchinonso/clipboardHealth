import { createMocks } from "node-mocks-http";
import jobsApi from "../pages/api/jobs";
import  jobs from "../data/jobs.json";

describe("Test Jobs API", () => {
  it("should request without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await jobsApi(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).jobs).toEqual(jobs);
  });

  describe("Filter Query", () => {
    it("should request with `JOB TYPE` filter", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter": "job_type:Part-time",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should request with `DEPARTMENT` filter", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter":"department:Pediatrics",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should request with `WORK SCHEDULE` filter", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter": "work_schedule:Day shift",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should request with `EXPERIENCE` filter", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter":"experience:Senior",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
  });

  describe("Search Query", () => {
    it("should search any `JOB TYPE`", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "Part-time",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should search any `DEPARTMENT`", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "Medicine",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should search any `WORK SCHEDULE`", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "Day shift",
        },
      });
      await jobsApi(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
  })
});
