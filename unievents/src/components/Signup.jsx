import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/auth/signup', { email, password });

      if (response.status === 201) {
        alert('Signup successful! Please log in.');
        navigate('/login');
      }
    }
    catch (error) {
      alert('Signup failed. Try Again.')
    }
  };


  return (
    <section id="about" className="about section">

      <div className="col-lg-6 container section-title" data-aos="fade-up">
        <h2>Signup<br /></h2>
        <p>Please Enter Your Email and Password</p>


        <div className="container">
          <div className="content" data-aos="fade-up" data-aos-delay="100">
            <form onSubmit={handleSignup}>

              <label id='input-email'>Email</label>
              <div className='input-wrapper'>
                <i className="bi bi-envelope"></i>
                <input
                  type="text"
                  id='email'
                  placeholder='Enter your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
              <br />

              <label id='input-password'>Password</label>
              <div className='input-wrapper'>
                <i className="bi bi-lock"></i>
                <input
                  type="password"
                  id='password'
                  placeholder='Enter your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </div>
              <br />

              <button type='submit' className="read-more">
                <span>Submit</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              
            </form>

            <div className='mt-3'>
              <p>Already have an Account?{'  '}
                <span className='btn-primary'>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
