import React, { useEffect, useState } from 'react'
import axios from "axios";
function UserDetail({activeUserId}) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false))
    },[activeUserId])
  return (
    <div>
        <h2>Details</h2>
        {loading && <div>Loading..</div>}
        <hr/>
        <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default UserDetail