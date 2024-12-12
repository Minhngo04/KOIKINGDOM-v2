import React, { useState } from 'react';
import '../login/login.scss';
import koifish_auth from '../../../Picture/koi-fish-auth.png';
import koifishicon_auth from '../../../Picture/koi-icon-auth.png';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    // Tạo state để theo dõi trạng thái hiển thị mật khẩu
    const [showPassword, setShowPassword] = useState(false);

    // Hàm xử lý khi click vào icon mắt
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Đảo ngược trạng thái showPassword
    };

    return (
        <>
            <div className="outer-container">
                <div className="login-container">
                    <img className="auth-image" src={koifish_auth} />
                    <div className="login-form-container">
                        <div className="login-form">
                            <div className="form-header">
                                <div className="remember-me">Remember me</div>
                                <div className="forgot-password">Forgot Password</div>
                                <div className="separator-line"></div>
                            </div>
                            <img className="auth-logo" src={koifishicon_auth} />
                            <div className="login-button">LOGIN</div>
                            <div className="email-input-group">
                                <div className="input-icons">
                                    <FaUser size={24} className='icon-user' />
                                </div>
                                <input
                                    type="email"
                                    className="email-input"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="password-input-group">
                                <div className="input-icons">
                                    <RiLockPasswordFill size={24} className="icon-password" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"} // Kiểu input sẽ là "text" khi showPassword là true
                                    className="password-input"
                                    placeholder="Enter your password"
                                />
                                <div className="eye-icon-container" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <FaEyeSlash size={24} className="eye-icon" /> // Hiển thị FaEyeSlash khi mật khẩu đang được hiển thị
                                    ) : (
                                        <FaEye size={24} className="eye-icon" /> // Hiển thị FaEye khi mật khẩu đang bị ẩn
                                    )}
                                </div>
                            </div>

                            <div className="account-link">
                                <span>Don’t have an account?</span>
                                <span className="sign-up-link">Sign Up</span>
                            </div>
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
        </>
    );
};

export default Login;
