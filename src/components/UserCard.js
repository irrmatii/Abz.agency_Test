import React from 'react';

const UserCard = ({user}) => {
    return (
        <div className="w-full py-[20px] px-[20px] bg-white rounded-xl flex flex-col gap-[20px] items-center">
            <div>
                <img className="w-[70px] h-[70px] rounded-full" loading="lazy"  src={user.photo} alt=""/>
            </div>
            <p className="w-full text-center truncate" title={user.name}>{user.name}</p>
            <div className="flex flex-col w-full text-center">
                <p className="truncate">{user.position}</p>
                <p className="truncate" title={user.email}>{user.email}</p>
                <p className="truncate">{user.phone}</p>
            </div>

        </div>
    );
};

export default UserCard;