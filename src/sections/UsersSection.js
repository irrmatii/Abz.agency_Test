import React, {useEffect, useState} from 'react';
import http from "../plugins/http";
import Buttons from "../components/Buttons";
import UserCard from "../components/UserCard";
import useStore from "../store/main";

const UsersSection = () => {

    const {currentUserNr, setCurrentUserNr} = useStore(state => state);


    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState();

    useEffect(() => {
        async function fetchAllUsers() {
            const usersNumber = await  http.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users`)
            setTotalUsers(usersNumber.total_users)

            const data = await http.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${usersNumber.total_users}`)

            console.log("data", data)
            const Users = data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
            console.log(Users)

            const AllUsers = Users.slice(0, currentUserNr)
            setUsers(AllUsers);
        }

        fetchAllUsers()
    }, [currentUserNr]);

    function ShowMore(){
        if (currentUserNr >= totalUsers) return;
        console.log("clicle")
        setCurrentUserNr()
    }

    return (
        <div className="container min-h-screen mb-[140px] flex flex-col gap-[60px] items-center">
            <div className="w-full text-center mt-[50px]">
                <h1>Working with Get request</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {users.map((user, i) => (
                    <UserCard key={i} user={user}/>
                ))}
            </div>
            {currentUserNr >= totalUsers ? null : (
                <div>
                    <Buttons value={"Show more"} click={ShowMore}/>
                </div>
            )}
        </div>
    );
};

export default UsersSection;