import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Header.scss";

const Header = () => {
    return (
        <nav className="header-nav">
            <div className="header-container">
                <h2>
                    <Link className="header-text" to="/">
                        One Blog Post
                    </Link>
                </h2>
            </div>
        </nav>
    );
};

export default Header;
