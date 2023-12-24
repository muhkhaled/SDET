import request from 'supertest'
import app from './app.js'

let token =''

describe("Delete All Users", () => {

  test("Start", async () => {
    const response = await request(app)
    .delete("/api/v1/all-users")
    .send({key_admin: "keyadmin123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized access'
    expect(response.body).toHaveProperty('message', 'Users deleted with success');
  })
})

//VALID BODY
describe("Create User", () => {

  test("Valid Body", async () => {
    const response = await request(app)
    .post("/api/v1/users")
    .send({name: "user", email: "user@gmail.com", password: "user123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'User already registered'
    expect(response.body).toHaveProperty('message', 'User registered with success');
  })
})

describe("Authenticate User", () => {

  test("Valid Body", async () => {
    const response = await request(app)
    .post("/api/v1/auth")
    .send({email: "user@gmail.com", password: "user123"})
    token = response.body.token
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'Incorrect email or password'
    expect(response.body).toHaveProperty('token');

  })
})

//VALID AUTHORIZATION
describe("Get User", () => {

  test("Valid", async () => {
    const response = await request(app)
    .get("/api/v1/users")
    .set("Authorization", token)
    expect(response.statusCode).toBe(200)
    console.log(response.text)
    //403 'Unauthorized'
  })
})

describe("Patch User", () => {

    test("Valid", async () => {
      const response = await request(app)
      .patch("/api/v1/users")
      .set("Authorization", token)
      .send({name: "newName", email: "new_email@gmail.com", password: "newpassword123"})
      console.log(response.text)
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('message', 'User updated with success!');
    })
  })

describe("Reauthenticate User After Patching", () => {

  test("Valid", async () => {
    const response = await request(app)
    .post("/api/v1/auth")
    .send({email: "new_email@gmail.com", password: "newpassword123"})
    token = response.body.token
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'Incorrect email or password'
    expect(response.body).toHaveProperty('token');

  })
})

describe("Delete User", () => {

  test("Valid", async () => {
    const response = await request(app)
    .delete("/api/v1/users")
    .set('Authorization', token)
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized to delete'
    expect(response.body).toHaveProperty('message', 'User deleted with success!');
  })
})

//VALID KEYADMIN
describe("Delete All Users", () => {

  test("Valid", async () => {
    const response = await request(app)
    .delete("/api/v1/all-users")
    .send({key_admin: "keyadmin123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized access'
    expect(response.body).toHaveProperty('message', 'Users deleted with success');
  })
})

//INVALID BODY

describe("Create User", () => {

  test("with missing name", async () => {
    const response = await request(app)
    .post("/api/v1/users")
    //missing name
    .send({email: "user@gmail.com", password: "user123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'User already registered'
    expect(response.body).toHaveProperty('message', 'User registered with success');
  })

  test("with missing email", async () => {
    const response = await request(app)
    .post("/api/v1/users")
    .send({name: "user", password: "user123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'User already registered'
    expect(response.body).toHaveProperty('message', 'User registered with success');
  })

  test("with missing password", async () => {
    const response = await request(app)
    .post("/api/v1/users")
    .send({name: "user", email: "user1@gmail.com"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'User already registered'
    expect(response.body).toHaveProperty('message', 'User registered with success');
  })

  test("wrong email format", async () => {
      const response = await request(app)
      .post("/api/v1/users")
      .send({name: "user", email: "user", password: "user123"})
      console.log(response.text)
      expect(response.statusCode).toBe(200)
      //401 'User already registered'
      expect(response.body).toHaveProperty('message', 'User registered with success');
    })

    test("password containing only numbers", async () => {
      const response = await request(app)
      .post("/api/v1/users")
      .send({name: "user", email: "user2@gmail.com", password: "123"})
      console.log(response.text)
      expect(response.statusCode).toBe(200)
      //401 'User already registered'
      expect(response.body).toHaveProperty('message', 'User registered with success');
    })

})

describe("Authenticate User", () => {

  test("with missing email", async () => {
    const response = await request(app)
    .post("/api/v1/auth")
    .send({password: "user1234"})
    token = response.body.token
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'Incorrect email or password'
    expect(response.body).toHaveProperty('token');
  })

test("with missing password", async () => {
  const response = await request(app)
  .post("/api/v1/auth")
  .send({email: "userr@gmail.com"})
  token = response.body.token
  console.log(response.text)
  expect(response.statusCode).toBe(200)
  //401 'Incorrect email or password'
  expect(response.body).toHaveProperty('token');
})

test("with invalid email format", async () => {
  const response = await request(app)
  .post("/api/v1/auth")
  .send({email: "user123"})
  token = response.body.token
  console.log(response.text)
  expect(response.statusCode).toBe(200)
  //401 'Incorrect email or password'
  expect(response.body).toHaveProperty('token');
})
})

//INVALID AUTHORIZATION
describe("Get User", () => {

  test("with invalid token", async () => {
    const response = await request(app)
    .get("/api/v1/users")
    .set("Authorization", '123456')
    expect(response.statusCode).toBe(200)
    console.log(response.text)
    //403 'Unauthorized'
  })
})

describe("Patch User", () => {

    test("with invalid token", async () => {
      const response = await request(app)
      .patch("/api/v1/users")
      .set("Authorization", '123455')
      .send({name: "newName", email: "new_email@gmail.com", password: "newpassword123"})
      console.log(response.text)
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('message', 'User updated with success!');
    })
  })

describe("Delete User", () => {

  test("with invalid token", async () => {
    const response = await request(app)
    .delete("/api/v1/users")
    .set('Authorization', '1234453346')
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized to delete'
    expect(response.body).toHaveProperty('message', 'User deleted with success!');
  })
})

describe("Delete All Users", () => {

  test("with wrong admin key", async () => {
    const response = await request(app)
    .delete("/api/v1/all-users")
    .send({key_admin: "keyadmin"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized access'
    expect(response.body).toHaveProperty('message', 'Users deleted with success');
  })

  test("with valid admin key", async () => {
    const response = await request(app)
    .delete("/api/v1/all-users")
    .send({key_admin: "keyadmin123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //403 'Unauthorized access'
    expect(response.body).toHaveProperty('message', 'Users deleted with success');
  })
})

describe("Testing Patch User", () => {

  test("Create User", async () => {
    const response = await request(app)
    .post("/api/v1/users")
    .send({name: "user", email: "user@gmail.com", password: "user123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'User already registered'
    expect(response.body).toHaveProperty('message', 'User registered with success');
  })

  test("Authenticate User", async () => {
    const response = await request(app)
    .post("/api/v1/auth")
    .send({email: "user@gmail.com", password: "user123"})
    token = response.body.token
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    //401 'Incorrect email or password'
    expect(response.body).toHaveProperty('token');

  })

  test("Patch Password", async () => {
    const response = await request(app)
    .patch("/api/v1/users")
    .set("Authorization", token)
    .send({password: "newpassword123"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('message', 'User updated with success!');
  })

  test("Patch Name", async () => {
    const response = await request(app)
    .patch("/api/v1/users")
    .set("Authorization", token)
    .send({name: "newName"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('message', 'User updated with success!');
  })

  test("Patch Email", async () => {
    const response = await request(app)
    .patch("/api/v1/users")
    .set("Authorization", token)
    .send({email: "new_email@gmail.com"})
    console.log(response.text)
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('message', 'User updated with success!');
  })
})