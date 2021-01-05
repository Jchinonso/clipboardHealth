import { createMocks } from "node-mocks-http";
import filtersApi from "../pages/api/filters";
import filters from "../data/filters.json";

describe("Test Jobs API", () => {
  it("should request without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await filtersApi(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(filters);
  });
});
