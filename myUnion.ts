let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let samuel: User | Admin = {
  name: "Samuel",
  id: 363,
};

samuel = { username: "sm", id: 363 };

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`)
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id.toFixed();
  }
}

//* array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", "3"];
const data4: (string | number | boolean)[] = [2, "2", true];

let pi: 3.14 = 3.14;

pi = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment="crew"
