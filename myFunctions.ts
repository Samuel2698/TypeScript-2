function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("lol");
signUpUser("Samuel", "lol@gmail.com", true);
loginUser("Samuel", "s@s.com");

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};

function getNum(num: number): string | boolean {
  if (num > 0) {
    return true;
  }
  return "lol";
}

const friends = ["Romane", "Raul", "Luis"];

friends.map((friend): string => {
  return `My friends are ${friend}`;
});
