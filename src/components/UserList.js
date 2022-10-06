import React, { useEffect, useState } from "react";
import axios from "axios";
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <hr/>
      {loading && <div>Yükleniyor...</div>}
      <ul>
        {
            users.map((user) => (<li className="user-list" key={user.id}>{user.name}</li>))
        }
      </ul>
    </div>
  );
}

export default UserList;
