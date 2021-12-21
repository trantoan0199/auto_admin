import React from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import { BsFillCaretDownFill} from 'react-icons/bs'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="title">
                <h2>Dashboard</h2>
                <span>Detailed information about your store</span>
            </div>
            <div className="container">
                <div className="search">
                    <BiSearchAlt />
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="profile">
                    <FiBell className="bell" />
                    <div className="image">
                        <img src="data:image/jpeg;base64,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" alt="avt" />
                    </div>
                    <div className="profile__name">
                        <h4>Kishan Sheth</h4>
                        <h6>Admin</h6>
                    </div>
                    <BsFillCaretDownFill />
                </div>
            </div>
        </div>
    )
}
