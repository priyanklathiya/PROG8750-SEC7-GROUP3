import React from 'react'
import '../css/loginSigup.css';
import Logo from '../images/vistacartlogomini.png'; 
function Signup() {
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
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="retypePassword" className="form-label">Retype Password</label>
                  <input type="password" className="form-control" id="retypePassword" placeholder="Retype your password" />
                </div>
                <button type="submit" className="btn btn-custom">Sign Up</button>
              </form>
              <div className="mt-3">
                <p>Already have an account? <a href="/login">Login here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </>
  )
}

export default Signup