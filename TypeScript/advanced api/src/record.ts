type User1 = {
  id: string;
  userName: string;
};

// type Users = {
//   [key: string]: User1;
// };

type Users = Record<string, User1>;

const users: Users = {
  ghjdhfs: {
    id: "1",
    userName: "soumyo",
  },
  nuguihj: {
    id: "2",
    userName: "Tech",
  },
};

type Users0 = Record<string, number>;
const users0: Users0 = {
  dfkjkldfjd: 255,
  fkldfjdkfjd: 256,
};
