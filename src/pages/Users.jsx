import { useEffect, useState } from "react";
import { getUsers } from "../api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      {users.map((u) => (
        <div key={u.id}>
          <p>Name: {u.name}</p>
          <p>Email: {u.email}</p>
          <p>Role: {u.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Users;