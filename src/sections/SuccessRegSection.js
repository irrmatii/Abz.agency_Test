import React from 'react';
import useStore from "../store/main";

const SuccessRegSection = () => {

    const {formSuccess} = useStore(state => state);


    return (
        <div className={`container h-screen flex flex-col gap-[60px] items-center ${formSuccess? 'visible' : 'hidden'}`}>
            <div className="w-full text-center mt-[50px]">
                <h1>User successfully registered</h1>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <img src="/assets/success-image.webp" alt="success registration"/>
            </div>
        </div>
    );
};

export default SuccessRegSection;