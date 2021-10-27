const Manager = require("../lib/Manager");

test("getName function returns name", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.getName()).toBe("ringo");
});

test("getId function returns ID", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.getId()).toBe("3");
});

test("getEmail function returns email", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.getEmail()).toBe("ringo@email.com");
});

test("getofficeNumber function returns the office number", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.getOfficeNumber()).toBe("123");
});

test("getRole function returns role", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.getRole()).toBe("Manager");
});

test("Manager has all parameters", () => {
  const ringo = new Manager("ringo", "3", "ringo@email.com", '123');
  expect(ringo.name).toBe("ringo");
  expect(ringo.id).toBe("3");
  expect(ringo.email).toBe("ringo@email.com");
  expect(ringo.officeNumber).toBe("123");
});