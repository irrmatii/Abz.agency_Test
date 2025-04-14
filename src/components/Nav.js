import React from 'react';
import Buttons from "./Buttons";

const Nav = () => {

    const RefreshPage = () => {
        window.location.reload(); // Refreshes the current page
    };

    return (
        <div className="w-full h-[55px] flex items-center justify-center bg-white">
            <div className="container w-full flex items-center justify-between">
                <div className="w-auto h-full flex items-center">
                    <img src='/assets/Logo.svg' alt="logo" onClick={RefreshPage}/>
                </div>
                <div className="w-auto h-full flex items-center gap-4">
                    <Buttons value={"Users"}/>
                    <Buttons value={"Sign up"}/>
                </div>
            </div>

        </div>
    );
};

export default Nav;