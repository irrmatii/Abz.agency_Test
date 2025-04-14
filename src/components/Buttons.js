import React from 'react';

const Buttons = ({value, disable, click}) => {
    return (
        <button className={`min-w-[100px] w-auto h-[34px] rounded-3xl px-5 ${disable ? 'bg-[rgb(179,179,179)] text-gray-100 cursor-default' : 'bg-[#F4E041] hover:bg-yellow-300 cursor-pointer'}`}
                onClick={click? click : undefined}
                type="button"
        >
            {value}
        </button>
    );
};

export default Buttons;