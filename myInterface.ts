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

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const samuel: Admin = {
  email: "samuel@gmail.com",
  userId: 462643,
  role: "admin",
  githubToken: "github",
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
