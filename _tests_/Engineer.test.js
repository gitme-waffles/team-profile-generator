const Engineer = require("../lib/Engineer");

test("getName function returns name", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.getName()).toBe("paul");
});

test("getId function returns ID", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.getId()).toBe("3");
});

test("getEmail function returns email", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.getEmail()).toBe("paul@email.com");
});

test("getGithub function returns Github username", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.getGithub()).toBe("paulSmith");
});

test("getRole function returns role", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.getRole()).toBe("Engineer");
});

test("Engineer has all parameters", () => {
  const paul = new Engineer("paul", "3", "paul@email.com", 'paulSmith');
  expect(paul.name).toBe("paul");
  expect(paul.id).toBe("3");
  expect(paul.email).toBe("paul@email.com");
  expect(paul.github).toBe("paulSmith");
});
