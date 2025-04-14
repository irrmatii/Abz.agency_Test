import React, {useEffect, useState} from 'react';
import http from "../plugins/http";
import Buttons from "../components/Buttons";
import UserCard from "../components/UserCard";
import useStore from "../store/main";

const UsersSection = () => {

    const { currentPage, setCurrentPage } = useStore((state) => state);

    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {

        http.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=6`)
            .then(data => {

                setUsers(prev =>
                    currentPage === 1 ? data.users : [...prev, ...data.users]);

                setTotalPages(data.total_pages);
            })
    }, [currentPage]);


    function ShowMore() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
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
            {currentPage >= totalPages ? null : (
                <div>
                    <Buttons value={"Show more"} click={ShowMore}/>
                </div>
            )}
        </div>
    );
};

export default UsersSection;