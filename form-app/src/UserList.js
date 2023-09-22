function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
<<<<<<< HEAD
      <tbody data-testid="users" >{renderedUsers}</tbody>
=======
      <tbody data-testid='users' >{renderedUsers}</tbody>
>>>>>>> 6581ee968215f0107808ebeed269faa7d5b6d889
    </table>
  );
}

export default UserList;
