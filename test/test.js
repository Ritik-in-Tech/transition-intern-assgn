const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
describe("User Controller", () => {
  it("should add a new user", async () => {
    const response = await request(app).post("/api/add-user").send({
      name: "Ramesh",
      email: "ramesh@gmail.com",
      password: "123",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User created successfully.");
    expect(response.body).toHaveProperty("newuser");
  });

  it("should edit user details", async () => {
    const response = await request(app).put("/api/edit-user").send({
      id: "660d8d0d97153fee49b9d9a8",
      name: "ritik_tiwari",
      email: "tie.2@iitj.ac.in",
      password: "12",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User edited successfully.");
    expect(response.body).toHaveProperty("editedUser");
  });

  it("should update user details", async () => {
    const response = await request(app).patch("/api/update-user").send({
      id: "660d8d0d97153fee49b9d9a8",
      name: "ritik_tiwari",
      email: "tie.2@iitj.ac.in",
      password: "12",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User updated successfully");
    expect(response.body).toHaveProperty("updateduser");
  });
});

afterAll(async () => {
  // Close MongoDB connection
  await mongoose.disconnect();
});
