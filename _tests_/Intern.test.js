const Intern = require("../lib/Intern");

test("getName function returns name", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.getName()).toBe("george");
});

test("getId function returns ID", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.getId()).toBe("4");
});

test("getEmail function returns email", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.getEmail()).toBe("george@email.com");
});

test("getSchool function returns School username", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.getSchool()).toBe("Monash University");
});

test("getRole function returns role", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.getRole()).toBe("Intern");
});

test("Intern has all parameters", () => {
  const george = new Intern("george", "4", "george@email.com", 'Monash University');
  expect(george.name).toBe("george");
  expect(george.id).toBe("4");
  expect(george.email).toBe("george@email.com");
  expect(george.school).toBe("Monash University");
});