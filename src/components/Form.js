import "./Form.css";

export const Form = () => {

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
            <h2>Login Form</h2>

            <form>

              <div className="input-box">
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" />
              </div>

              <div className="input-box">
                <input type="submit" value="Login" />
              </div>

              <p className="reset">Reset</p>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}