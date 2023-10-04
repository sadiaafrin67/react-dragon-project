import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location in login',location)

 

  const handleLogIn = e => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData (e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // user signIn
    signIn(email, password)
    .then(result => {
      console.log(result.user)


      // navigate after login
      navigate(location?.state ? location.state : '/')
    })
    
    .catch(error => {
      console.error(error)
    })

  }


  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center my-8">Please Login</h2>

      <form onSubmit={handleLogIn} className="w-full md:w-3/4 lg:w-1/2 text center mx-auto">
      <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
      </form>
      <p className="text-center my-4">Do not have an account yet? <Link className="text-blue-700 font-bold hover:underline" to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
