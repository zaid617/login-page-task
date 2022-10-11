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
            <label className="label" htmlFor="email">Email</label>
           <input className="inputs" name="email" type="email"/>
           </div>

            <div className="inputSubBox">
              <label className="label" htmlFor="password">Password</label>
           <input className="inputs" name="password" type="password"/>
           </div>
           
          

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
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
            <img src="https://www.pinclipart.com/picdir/middle/74-740310_transparent-background-twitter-logo-clipart.png" alt="" />
           </div>

           </div>
         </form>
        </div>
    </div>
  )
}
