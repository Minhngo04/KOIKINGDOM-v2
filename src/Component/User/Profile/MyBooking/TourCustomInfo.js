import React from 'react';
import './tourcustominfo.scss';

const TourCustomInfo = () => {
    const tableHeaders = [
        "Image",
        "Departure Location",
        "Quotation Price",
        "Quantity",
        "Date",
        "Status",
        "Details",
        "Actions",
    ];

    const tableData = [
        {
            image: "https://via.placeholder.com/101x90",
            location: "Thành phố Cần Thơ",
            price: "100.000",
            quantity: 1,
            dateStart: "2024-12-04",
            dateEnd: " 2024-12-21",
            status: "Pending",
            details: "Details",
            actions: "Checkout",
        },
        {
            image: "https://via.placeholder.com/101x90",
            location: "Thành phố Cần Thơ",
            price: "100.000",
            quantity: 1,
            dateStart: "2024-12-04",
            dateEnd: " 2024-12-21",
            status: "Pending",
            details: "Details",
            actions: "Checkout",
        },
        {
            image: "https://via.placeholder.com/101x90",
            location: "Thành phố Cần Thơ",
            price: "100.000",
            quantity: 1,
            dateStart: "2024-12-04",
            dateEnd: " 2024-12-21",
            status: "Pending",
            details: "Details",
            actions: "Checkout",
        },
        {
            image: "https://via.placeholder.com/101x90",
            location: "Thành phố Cần Thơ",
            price: "100.000",
            quantity: 1,
            dateStart: "2024-12-04",
            dateEnd: " 2024-12-21",
            status: "Pending",
            details: "Details",
            actions: "Checkout",
        }
    ];

    return (
        <div className="tour-custom-info">
            {/* Table Header */}
            <div className="table-header">
                {tableHeaders.map((header, index) => (
                    <div key={index} className="header-cell">
                        {header}
                    </div>
                ))}
            </div>

            {/* Table Rows */}
            {tableData.map((row, index) => (
                <div key={index} className="table-row">
                    <div className="cell">
                        <img src={row.image} alt="Tour" className="image" />
                    </div>
                    <div className="cell">{row.location}</div>
                    <div className="cell">{row.price}</div>
                    <div className="cell">{row.quantity}</div>
                    <div className="cell">
                        <span>{row.dateStart}</span>
                        <div>-</div>
                        <span>{row.dateEnd}</span>
                    </div>
                    <div className="cell">{row.status}</div>
                    <div className="cell">{row.details}</div>
                    <div className="cell">{row.actions}</div>
                </div>
            ))}
        </div>
    );
};

export default TourCustomInfo;
