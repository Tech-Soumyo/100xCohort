// interface User {
//   age: number;
//   Name: string;
// }

// const sumOfAge = (user1: User, user2: User) => {
//   return user1.age + user2.age;
// };

// const age = sumOfAge({ Name: "123", age: 85 }, { Name: "456", age: 45 });
// console.log(age);

interface User {
  age: number;
  Name: string;
  email: string;
  password: string;
}
type updateProps = Pick<User, "Name" | "age" | "password">;
function updateUser(updatedProps: updateProps) {}
const user = updateUserPartial({
  Name: "fdd",
  age: 45,
  password: "755",
});
