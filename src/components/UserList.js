import React, { useEffect, useState } from "react";
import axios from "axios";
function UserList({setActiveUserId}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
        
      <hr/>
      {loading && <div>Loading...</div>}
      <ul>
        {
            users.map((user) => (<li onClick={() => setActiveUserId(user.id)} className="user-list" key={user.id}>{user.name}</li>))
        }
      </ul>
      <h3>0xBeki</h3>
    </div>
  );
}

export default UserList;
