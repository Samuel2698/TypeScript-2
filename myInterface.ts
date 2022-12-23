// type User={
//     email:string,
//     userId:number
// }

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const samuel: User = {
  email: "samuel@gmail.com",
  userId: 462643,
  dbId: 33,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "samuel40", off: 10) => {
    return 10;
  },
};

samuel.email = "s@samuel.com";
// samuel.dbId = 44;
