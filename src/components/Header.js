import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo192.png';
import { useState } from 'react';

export default function Header() {
    const [user, setUser] = useState('ĐĂNG KÍ/ĐĂNG NHẬP');
    return (
        <div className="header">
            <div className="header_inner container">
                <div className="header_logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header_nav">
                    <Link className="header_nav_items" to="/">
                        <span>TRANG CHỦ</span>
                    </Link>
                    <Link className="header_nav_items">
                        <span>ĐỘI CỦA TÔI</span>
                    </Link>
                    <Link className="header_nav_items">
                        <span>CÁC TRẬN ĐẤU</span>
                    </Link>
                    <Link className="header_nav_items">
                        <span>LIÊN HỆ</span>
                    </Link>
                </ul>
                <Link className="header_login" to="/">
                    <span>{user}</span>
                </Link>
            </div>
        </div>
    );
}
