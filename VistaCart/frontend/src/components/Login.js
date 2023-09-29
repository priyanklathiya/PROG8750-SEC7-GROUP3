import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/loginSigup.css';
import Logo from '../images/vistacartlogomini.png';
function Login() {
  return (
      <>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">
                    <img className="logo" src={Logo} alt="Vista cart Logo" /> Vistacart
                </h5>
                <hr />
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-custom">Login</button>
              </form>
              <div className="mt-3">
                <p>Don't have an account?  <Link to="/Signup" className="login-link">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </>
  )
}

export default Login