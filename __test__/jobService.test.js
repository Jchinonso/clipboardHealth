import { before } from "lodash";
import JobService from "../pages/api/services/jobService";

import { mockData, filters } from "./mockData";
let jobService;
beforeEach(() => {
  jobService = new JobService(mockData);
});
describe("Job Service class", () => {
  describe("Contructor", () => {
    it("should test the contructor", () => {
      expect(jobService.jobs).toEqual(mockData);
      expect(jobService.filters).toEqual(filters);
      expect(Array.isArray(jobService.jobs)).toBeTruthy();
    });
  });

  describe("filterBy method", () => {
    it("should return an instance of the JobService class", () => {
      expect(jobService.filterBy()).toBeInstanceOf(JobService);
    });
    it("should return the jobs payload if querystring is undefined", () => {
      expect(jobService.filterBy().jobs).toEqual(mockData);
    });
    it("should return jobs if filterstring  is not in jobService.filters", () => {
      expect(jobService.filterBy("state", "Texas").jobs).toEqual(mockData);
    });
    it("should give back the desired result", () => {
      expect(jobService.filterBy("department", "Medicine").jobs).toEqual(
        mockData
      );
      expect(
        jobService.filterBy("department", "Medicine").jobs[0].items
      ).toHaveLength(1);
      expect(
        jobService.filterBy("department", "cardioii").jobs[0].items
      ).toHaveLength(0);
    });
  });

  describe("search method", () => {
    it("should return an instance of the JobService class", () => {
      expect(jobService.search()).toBeInstanceOf(JobService);
    });
    it("should return the jobs payload if searchString is undefined or empty", () => {
      expect(jobService.search().jobs).toEqual(mockData);
      expect(jobService.search("").jobs).toEqual(mockData);
    });
    it("should search for departments that matches the searchstring", () => {
      expect(jobService.search("Medicine").jobs[0].items).toHaveLength(1);
      expect(jobService.search("Urology").jobs[0].items).toHaveLength(0);
    });
    it("should search for hospital name that matches the searchstring", () => {
      expect(jobService.search("Mammoth").jobs[0].items).toHaveLength(1);
      expect(jobService.search("cavinana").jobs[0].items).toHaveLength(0);
    });
    it("should search for job_title name that matches the searchstring", () => {
      expect(jobService.search("LPN Charge Nurse").jobs[0].items).toHaveLength(
        1
      );
      expect(jobService.search("cavinana").jobs[0].items).toHaveLength(0);
    });
  });
});
