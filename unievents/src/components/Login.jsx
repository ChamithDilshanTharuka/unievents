import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        //Basic input validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        try {
            // Send login request to backend
            const response = await axios.post('http://localhost:3001/routes/auth', { email, password });

            if (response.data.token) {
                //Store JWT token in localStorage
                localStorage.setItem('authToken', response.data.token);
                alert('Login successful!');
                navigate('/admin-events'); // Redirect to events page
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('An error occured during login, Please try again.');
        }
    };




    return (
        <section id="about" className="about section">
            <div className="col-lg-6 container section-title" data-aos="fade-up">
                <h2>Login<br /></h2>
                <p>Please Enter Your Email and Password</p>


                <div className="container">
                    <div className="content" data-aos="fade-up" data-aos-delay="100">
                        <form onSubmit={handleSubmit}>

                            <label id='input-email'>Email</label>
                            <div className='input-wrapper'>
                                <i className="bi bi-envelope"></i>
                                <input
                                    type="text"
                                    id='email'
                                    placeholder='Enter your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <br />

                            <label id='input-password'>Password</label>
                            <div className='input-wrapper'>
                                <i className="bi bi-lock"></i>
                                <input type="password" id='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <br />

                            <button type="submit" className="read-more">
                                <span>Submit</span>
                                <i className="bi bi-arrow-right"></i>
                            </button>

                        </form>

                        <div className='mt-3'>
                            <p>Don't have an account yet?{'  '}
                                <span className='btn-primary'>
                                    <Link to="/signup">Signup Now</Link>
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
