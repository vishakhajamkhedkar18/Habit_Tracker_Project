import {useState} from "react";
import {signup} from "../service/authService";

function Signup({ setUser }){

    const [form, setForm] = useState({name:"",email:"",password:""});

    const handleSumbit = () => {
        signup(form).then(res => {setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        })
            .catch(err=>alert(err.response.data.error));
    };

    return(
      <div>
          <h2>Sign up</h2>
          <input placeholder="Name" onChange={e => setForm({...form,name: e.target.value})}/>
          <input placeholder="Email" onChange={e => setForm({...form,email: e.target.value})}/>
          <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
          <button onClick={handleSumbit}>Sign up</button>
      </div>
    );
}

export default Signup;