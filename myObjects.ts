const User = {
  name: "Samuel",
  email: "sam@gg.dev",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Samuel", isPaid: false, email: "s@s.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Samuel", price: 399 };
}

export {};
