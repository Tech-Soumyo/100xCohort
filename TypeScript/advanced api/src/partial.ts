interface User {
  age: number;
  Name: string;
  email: string;
  password: string;
}
type updateProp = Pick<User, "Name" | "age" | "password">;

type updatePartialProps = Partial<updateProp>;

function updateUserPartial(updatedProps: updatePartialProps) {}

const user1 = updateUserPartial({
  Name: "fdd",
  age: 45,
});
