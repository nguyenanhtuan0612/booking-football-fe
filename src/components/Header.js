import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo192.png';
import { constants } from '../configs';
const { textConst: text } = constants;

const mainNav = [
    {
        display: text.HOME,
        path: '/',
    },
    {
        display: text.MY_TEAM,
        path: '/teamDetail',
    },
    {
        display: text.CONTACT,
        path: '/contact',
    },
];

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="header_menu_mobile_toggle">
                    <i className="bx bx-menu-alt-left"></i>
                </div>
                <div className="header_menu_left">
                    {mainNav.map((item, index) => (
                        <div key={index} className="header_menu_left_item">
                            <Link to={item.path}>
                                <span>{item.display}</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="header_menu_right">
                    <div className="header_menu_right_item">
                        <Link to="#">
                            <i className="bx bx-search"></i>
                        </Link>
                    </div>
                    <div className="header_menu_right_item">
                        <Link to="/user">
                            <i className="bx bx-user"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
