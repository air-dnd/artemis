import supertest from "supertest";
import { testApplicationInstance } from "./setup";

describe("Artemis API Index Route", () => {
  const agent = supertest(testApplicationInstance);
  test("GET /", (done) => {
    agent.get("/").expect(200, done);
  });
});
