import React, { useState } from 'react';

const Navbar = () => {
    return (
        <>
            <nav id="navbar-main" className="navbar is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item mobile-aside-button">
                <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
                </a>
                <div className="navbar-item">
                <div className="control"></div>
                </div>
            </div>
            <div className="navbar-brand is-right">
                <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
                <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
                </a>
            </div>
            <div className="navbar-menu" id="navbar-menu">
                <div className="navbar-end">
                <div className="navbar-item dropdown has-divider">
                    <a className="navbar-link">
                    <span className="icon"><i className="mdi mdi-menu"></i></span>
                    <span>Sample Menu</span>
                    <span className="icon">
                        <i className="mdi mdi-chevron-down"></i>
                    </span>
                    </a>
                    <div className="navbar-dropdown">
                    <a href="profile.html" className="navbar-item">
                        <span className="icon"><i className="mdi mdi-account"></i></span>
                        <span>My Profile</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-settings"></i></span>
                        <span>Settings</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-email"></i></span>
                        <span>Messages</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-logout"></i></span>
                        <span>Log Out</span>
                    </a>
                    </div>
                </div>
                <div className="navbar-item dropdown has-divider has-user-avatar">
                    <a className="navbar-link">
                    <div className="user-avatar">
                    </div>
                    <div className="is-user-name"><span>John Doe</span></div>
                    <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                    </a>
                    <div className="navbar-dropdown">
                    <a href="profile.html" className="navbar-item">
                        <span className="icon"><i className="mdi mdi-account"></i></span>
                        <span>My Profile</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-settings"></i></span>
                        <span>Settings</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-email"></i></span>
                        <span>Messages</span>
                    </a>
                    <a className="navbar-item">
                        <span className="icon"><i className="mdi mdi-logout"></i></span>
                        <span>Log Out</span>
                    </a>
                    </div>
                </div>
                <a title="Log out" className="navbar-item desktop-icon-only">
                    <span className="icon"><i className="mdi mdi-logout"></i></span>
                    <span>Log out</span>
                </a>
                </div>
            </div>
            </nav>
        </>
      );        

}

export default Navbar