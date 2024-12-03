import React, { useState } from 'react';
import Button from './Button.js';
import Checkbox from './Checkbox.js';
import DatePicker from './DatePicker.js';
import { useNavigate } from 'react-router-dom';

import './CustomTourForm.scss';


const farms = Array(5).fill().map((_, index) => ({
    id: `farm-${index + 1}`,
    label: 'name checkbox'
}));

const koiTypes = Array(5).fill().map((_, index) => ({
    id: `koi-${index + 1}`,
    label: 'name checkbox'
}));

const CustomTourForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        startDate: '',
        endDate: '',
        departureLocation: '',
        selectedFarms: new Set(),
        selectedKoiTypes: new Set()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (type, id) => {
        setFormData(prev => {
            const newSet = new Set(prev[type]);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return {
                ...prev,
                [type]: newSet
            };
        });
    };

    const navigate = useNavigate();  // Hook to navigate between pages

    const handleNavigation = (type) => {
        switch (type) {
            case 'available':
                navigate('/available-tour');  // Điều hướng đến BookingPage
                break;
            case 'custom':
                navigate('/custom-tour');  // Điều hướng đến CustomTourPage
                break;
            case 'koiOrder':
                navigate('/koiOrder');  // Điều hướng đến trang CustomTourPage
                break;
            default:
                console.error('Unknown navigation type');
        }
    };

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <h1 className="page-title">CUSTOM TOUR</h1>

                <div className="tour-types">
                    <button className="tour-type-button" onClick={() => handleNavigation('available')}>Available Tour</button>
                    <button className="tour-type-button" onClick={() => handleNavigation('custom')}>
                        Custom Tour
                    </button>
                    <button className="tour-type-button" onClick={() => handleNavigation('koiOrder')}>Order KOI fish</button>
                </div>
                <div className="form-section">
                    <label htmlFor="fullName" className="input-label">FULL NAME</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="text-input"
                        placeholder="enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-section">
                    <label className="input-label">DATE RANGE</label>
                    <div className="date-pickers-container">
                        <DatePicker
                            label="start Date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange({
                                target: { name: 'startDate', value: e.target.value }
                            })}
                            icon="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/b53a370d7a2e7fb0a8bd154fda39fbf75f5dbe498ba9ac44a3c01f59ef92d1ab?apiKey=28ba4404306d44e793d93f465a1a0e87&"
                        />
                        <DatePicker
                            label="Select Date"
                            value={formData.endDate}
                            onChange={(e) => handleInputChange({
                                target: { name: 'endDate', value: e.target.value }
                            })}
                            icon="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/41f256188fb1e2fdf4f25b1300b287215c765733283f50c15bbb93e56992808e?apiKey=28ba4404306d44e793d93f465a1a0e87&"
                        />
                    </div>
                </div>

                <div className="form-section">
                    <label htmlFor="departure" className="input-label">DEPARTURE LOCATION</label>
                    <input
                        type="text"
                        id="departure"
                        name="departureLocation"
                        className="text-input"
                        placeholder="choose departure location"
                        value={formData.departureLocation}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-section">
                    <label className="input-label">SELECT FARM</label>
                    <div className="checkbox-grid">
                        {farms.map((farm) => (
                            <Checkbox
                                key={farm.id}
                                id={farm.id}
                                label={farm.label}
                                checked={formData.selectedFarms.has(farm.id)}
                                onChange={() => handleCheckboxChange('selectedFarms', farm.id)}
                            />
                        ))}
                    </div>
                </div>

                <div className="form-section">
                    <label className="input-label">SELECT KOI TYPE</label>
                    <div className="checkbox-grid">
                        {koiTypes.map((koi) => (
                            <Checkbox
                                key={koi.id}
                                id={koi.id}
                                label={koi.label}
                                checked={formData.selectedKoiTypes.has(koi.id)}
                                onChange={() => handleCheckboxChange('selectedKoiTypes', koi.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button variant="submit" type="submit">SUBMIT</Button>
            </form>
        </>
    );
};

export default CustomTourForm;