import React from "react";

const Header = ({ pageHeader }) => {
    return (
        <header className="header">
            <div className="page-header">
                <h1>{pageHeader}</h1>
            </div>
        </header>
    )
}


export default Header;