import React, { useState } from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";
import koifish_auth from '../../../Picture/koi-fish-auth.png';
import koifishicon_auth from '../../../Picture/koi-icon-auth.png';
import '../register/register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Hàm xử lý khi click vào icon mắt
    const togglePasswordVisibility = (type) => {
        switch (type) {
            case 'password':
                setShowPassword(prevState => !prevState); // Đảo ngược trạng thái showPassword
                break;
            case 'confirmPassword':
                setShowConfirmPassword(prevState => !prevState); // Đảo ngược trạng thái showConfirmPassword
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="outer-container">
                <div className="login-container">
                    <img className="auth-image" src={koifish_auth} />
                    <div className="login-form-container">
                        <div className="login-form">
                            <img className="auth-logo" src={koifishicon_auth} />
                            <div className="tittle">Sign up</div>
                            <div className="container-loginform">
                                <div className="form-row">
                                    <div className="input-wrapper">
                                        <label htmlFor="lastName" className="input-label">Last name</label>
                                        <input type="text" id="lastName" className="input-field" />
                                    </div>

                                    <div className="input-wrapper">
                                        <label htmlFor="firstName" className="input-label">First name</label>
                                        <input type="text" id="firstName" className="input-field" />
                                    </div>
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="email" className="input-label">Email</label>
                                    <input type="text" id="email" className="input-field" />
                                </div>

                                <div className="form-row">
                                    <div className="input-wrapper">
                                        <label htmlFor="phone" className="input-label">Phone</label>
                                        <input type="text" id="phone" className="input-field" />
                                    </div>

                                    <div className="input-wrapper">
                                        <label htmlFor="gender" className="input-label">Gender</label>
                                        <select id="gender" className="input-field">
                                            <option className="input-label" value="">Select Gender</option>
                                            <option className="input-label" value="male">Male</option>
                                            <option className="input-label" value="female">Female</option>
                                            <option className="input-label" value="other">Other</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password" className="input-label">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="input-field"
                                    />
                                    <div
                                        className="eye-icon-container"
                                        onClick={() => togglePasswordVisibility('password')}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash size={24} className="eye-icon" />
                                        ) : (
                                            <FaEye size={24} className="eye-icon" />
                                        )}
                                    </div>
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        className="input-field"
                                    />
                                    <div
                                        className="eye-icon-container"
                                        onClick={() => togglePasswordVisibility('confirmPassword')}
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash size={24} className="eye-icon" />
                                        ) : (
                                            <FaEye size={24} className="eye-icon" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='container-interaction'>
                                <div className="form-header">
                                    <div className="remember-me">Remember me</div>
                                    <div className="forgot-password">Forgot Password</div>
                                    <div className="separator-line"></div>
                                </div>
                                <div className="account-link">
                                    <span>Don’t have an account?</span>
                                    <span className="sign-up-link">Sign Up</span>
                                </div>
                                <div className="login-button">Sign up</div>
                                <div className="social-login">
                                    <div className="social-login-text">
                                        <span className="separator left" />
                                        <span>Or login with</span>
                                        <span className="separator right" />
                                    </div>
                                </div>
                                <div className="google-login-button">
                                    <div className="google-login-icons">
                                        <FaGoogle size={25} className='icon-google' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
