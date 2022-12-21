// const user: (string | number)[] = [1, "sm"];

let tUser: [string, number, boolean];

tUser = ["sm", 131, true];

let rgb: [number, number, number, number] = [255, 123, 112, 0.6];

type User = [number, string];

const newUser: User = [112, "example@gmail.com"];

newUser[1] = "sm.com";
newUser[0] = 4;

export {};
