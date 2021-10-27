const Employee = require("../lib/Employee");

test("getName function returns name", () => {
  const john = new Employee("john", "1", "john@email.com");
  expect(john.getName()).toBe("john");
});

test("getId function returns ID", () => {
  const john = new Employee("john", "1", "john@email.com");
  expect(john.getId()).toBe("1");
});

test("getEmail function returns email", () => {
  const john = new Employee("john", "1", "john@email.com");
  expect(john.getEmail()).toBe("john@email.com");
});

test("getRole function returns role", () => {
  const john = new Employee("john", "1", "john@email.com");
  expect(john.getRole()).toBe("Employee");
});

test("Employee has all parameters", () => {
  const john = new Employee("john", "1", "john@email.com");
  expect(john.name).toBe("john");
  expect(john.id).toBe("1");
  expect(john.email).toBe("john@email.com");
});
