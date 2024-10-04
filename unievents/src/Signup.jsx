import React from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <section id="about" className="about section">

    <div className="col-lg-6 container section-title" data-aos="fade-up">
        <h2>Signup<br /></h2>
        <p>Please Enter Your Email and Password</p>


        <div className="container">

            <div className="content" data-aos="fade-up" data-aos-delay="100">

                <label id='input-email'>Email</label>
                <div className='input-wrapper'>
                <i className="bi bi-envelope"></i><input type="text" id='email' placeholder='Enter your Email' />
                </div>
                <br />

                <label id='input-password'>Password</label>
                <div className='input-wrapper'>
                <i className="bi bi-lock"></i><input type="password" id='password' placeholder='Enter your Password' />
                </div>
                <br />

                <Link to="./Signup" className="read-more"><span>Submit</span><i className="bi bi-arrow-right"></i></Link>
                <div className='mt-3'>
                            <p>Already have an Account? <span className='btn-primary'> <Link to="/signup">Login</Link></span></p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
