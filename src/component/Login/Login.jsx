import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="container1"></div>
        <div className="container2">
         <form>
          <h1 className="heading">Login to continue</h1>
          <div className="inputBox">
           <input className="inputs" type="email" placeholder="Email"/>
           <input className="inputs" type="password" placeholder="Password" />
          

          <div className="forgetDiv">
          <div className="checkbox">
           <input type="checkbox" className="check"/>
           <span>Remember Me</span>
          </div>
           <a href="#" className="a">Forget Password ?</a>
          </div>

           <button className="btn">LOGIN</button>

          <p className="para">Or sign up using</p>

           <div className="images">
            <img src="https://airforshare.com/files/YEZhAu.png" alt="" />
            <img src="https://airforshare.com/files/MVLAam.png" alt="" />
           </div>

           </div>
         </form>
        </div>
    </div>
  )
}
