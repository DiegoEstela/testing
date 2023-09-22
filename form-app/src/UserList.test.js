import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponents(){
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "diego", email: "diego@diego.com" },
  ];
   render(<UserList users={users} />);

   return{
    users
   }
}

test("render one row per user", () => {
  renderComponents()
  const rows = within(screen.getByTestId("users")).getAllByRole("row")
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {

  const {users} = renderComponents()
  for (let user of users){
    const name = screen.getByRole('cell', {name : user.name})
    const email = screen.getByRole('cell', {name : user.email})
    
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }


});
