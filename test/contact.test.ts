import supertest from "supertest";
import { ContactTest, UserTest } from "./test-utils";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";

describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should create new contact", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "rian",
        last_name: "gugu",
        email: "rian@gmail.com",
        phone: "12345",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("rian");
    expect(response.body.data.last_name).toBe("gugu");
    expect(response.body.data.email).toBe("rian@gmail.com");
    expect(response.body.data.phone).toBe("12345");
  });

  it("should reject create new contact if data is invalid", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "",
        last_name: "",
        email: "rian@.com",
        phone: "1234512333333333333333333333333333333333",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.data.id).toBeDefined();
  });
});
