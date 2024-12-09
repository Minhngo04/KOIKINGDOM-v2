import React from 'react';

const ProfileForm = () => {
    return (
        <form className="profile-form">
            <h1 className="form-title">My Profile</h1>

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

            <div className="form-row">
                <div className="input-wrapper">
                    <label htmlFor="phone" className="input-label">Phone Numbers</label>
                    <input type="tel" id="phone" className="input-field" />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="gender" className="input-label">Gender</label>
                    <select id="gender" className="input-field">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <label htmlFor="address" className="input-label">Address</label>
                <input type="text" id="address" className="input-field" />
            </div>

            <button type="submit" className="submit-button">EDIT</button>
        </form>
    );
};

export default ProfileForm;
