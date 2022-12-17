type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const createUser = (user: User): User => {
  return { name: "", email: "", isActive: true };
};

createUser({ name: "", email: "", isActive: true });

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDeatils?: number;
};

let myUser: User2 = {
  _id: "egoipzejo",
  name: "Ken",
  email: "ken@bg.com",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "s@gmail.com";
// myUser._id="dfkjssdf"

export {};
