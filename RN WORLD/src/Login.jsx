
import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router"

export default function Login({onSubmit}) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !number ){
         setError("*Please fill all details before submitting.")
         return ;
    }
    setError("")
    onSubmit(name)
    setName("")
    setEmail("")
    setNumber("")
    navigate("/")
    alert(`Welcome ${name} in RN World`);
  }

  return (
    <>
      <div className="login-container">
        <h2 className="login-heading">Welcome to RN World </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Phone Number" />
          {
            error &&  <p style={{color:"red"}}>{error}</p>
          }
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
