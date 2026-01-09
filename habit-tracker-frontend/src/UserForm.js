import { useState } from "react";
import axios from "axios";

function UserForm({ onUserCreated }){
    const[name, setname] = useState("");
    const[email, setEmail] = useState("");

    const createUser = () => {
      axios.post("http://localhost:8080/api/users", {
          name,
          email
      }).then(res => {
         onUserCreated(res.data);
         setname("");
         setEmail("");
      });
    };

    return(
        <div>
            <h2>Create User</h2>
            <input placeholder="Name" value = {name}
                   onChange={e=> setname(e.target.value)}/>
            <input placeholder="Email" value={email}
                   onChange={e => setEmail(e.target.value)} />
            <button onClick={createUser}>Create User</button>
        </div>
    );

}
export default UserForm;