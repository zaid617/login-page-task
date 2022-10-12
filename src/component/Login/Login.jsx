import "./Login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="container1"></div>
      <div className="container2">
        <form>
          <h1 className="heading">Login to continue</h1>
          <div className="inputBox">


            <div className="inputSubBox">

              <div className="input-container">
                <input id="name" className="input" type="email" pattern="" required />
                <label className="label" htmlFor="name">Email</label>
              </div>
            </div>
            
            <div className="inputSubBox">

            <div className="input-container1">
                <input id="name1" className="input1" type="password" pattern=".+" required />
                <label className="label" htmlFor="name1">Password</label>
              </div>
            </div>

            <div className="forgetDiv">
              <div className="checkbox">
                <input type="checkbox" className="check" />
                <span>Remember Me</span>
              </div>
              <a href="#" className="a">Forget Password ?</a>
            </div>

            <button className="btn">LOGIN</button>

            <p className="para">Or sign up using</p>

            <div className="images">
              <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
              <img src="https://www.pinclipart.com/picdir/middle/74-740310_transparent-background-twitter-logo-clipart.png" alt="" />
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}