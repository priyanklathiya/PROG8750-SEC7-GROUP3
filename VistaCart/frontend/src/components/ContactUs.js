import React, { useState } from 'react'
import '../css/loginSigup.css';
import Logo from '../images/vistacartlogomini.png';

function ContactUs() {

    return (
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">
                        <img className="logo" src={Logo} alt="Vista cart Logo" /> Vistacart
                    </h5>
                    <hr />
                  <form>
                    <div className="mb-3 form-group">
                      <label htmlFor="name" className="form-label card-text">Name</label>
                        <input type="text"
                          className={`form-control`}
                          id="name"
                          name="name"
                          placeholder="Enter your First name and last name" />
                        <div className="invalid-feedback text-white">Please enter correct name</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                        <input type="text"
                          className={`form-control`}
                          placeholder="Enter your email" />
                        <div className="invalid-feedback text-white">Please enter correct email</div>
                                    </div>
                                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text"
                          className={`form-control`}
                          placeholder="Enter subject" />
                        <div className="invalid-feedback text-white">Please enter correct subject</div>
                                    </div>
                                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                        <textarea type="text"
                          className={`form-control`}
                          placeholder="Enter message" />
                        <div className="invalid-feedback text-white">Please enter correct message</div>
                    </div>
                    <button type="submit" className="btn btn-custom">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default ContactUs