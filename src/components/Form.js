import { useState } from "react";
import "./Form.css";

export const Form = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
      setUsername(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const submitHandler = () => {
    
    alert(
        `My username: ${username}
        My password: ${password}`
    )
  };

const resetHandler = () => {
    
  setUsername("");
  setPassword("");
}


  return (

    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>

      <div className="box">

        <div className="square" style={{"--i": 0}}></div> 
        <div className="square" style={{"--i": 1}}></div>
        <div className="square" style={{"--i": 2}}></div>
        <div className="square" style={{"--i": 3}}></div>
        <div className="square" style={{"--i": 4}}></div>

        <div className="container">

          <div className="form">
            
            <h1>Login Form</h1>

            <form>

              <div className="input-box">
                <input type="text" placeholder="Username" onChange={usernameHandler}/>
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password"onChange={passwordHandler}/>
              </div>

              <div className="input-box">
                <input type="submit" value="Login" onClick={submitHandler}/>
              </div>

              <p className="reset" onClick={resetHandler}>Reset</p>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}