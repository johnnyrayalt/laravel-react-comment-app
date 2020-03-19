import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Header.scss";

const Header = () => {
    return (
        <nav className="header-nav">
            <div className="header-container">
                <h1>
                    <Link className="header-text" to="/">
                        One Blog Post
                    </Link>
                </h1>
            </div>
        </nav>
    );
};

export default Header;
