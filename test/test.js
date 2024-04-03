const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("User Controller", () => {
  it("should add a new user", (done) => {
    chai
      .request(app)
      .post("/api/add-user")
      .send({
        name: "John Doe",
        email: "john@example.com",
        password: "password",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body)
          .to.have.property("message")
          .equal("User created successfully.");
        expect(res.body).to.have.property("newuser");
        done();
      });
  });

  it("should edit user details", (done) => {
    chai
      .request(app)
      .put("/api/edit-user")
      .send({
        id: "user_id",
        name: "Updated Name",
        email: "updated@example.com",
        password: "newpassword",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property("message")
          .equal("User edited successfully.");
        expect(res.body).to.have.property("editedUser");
        done();
      });
  });

  it("should update user details", (done) => {
    chai
      .request(app)
      .patch("/api/update-user")
      .send({
        id: "user_id",
        name: "Updated Name",
        email: "updated@example.com",
        password: "newpassword",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property("message")
          .equal("User updated successfully");
        expect(res.body).to.have.property("updateduser");
        done();
      });
  });
});
