import users from "../components/UserListData";

import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';

import React, { useState, useEffect } from 'react';

function HomeView() {

    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedList = users.filter((user) => 
        user.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
    );

    // Error message when no user mathes the searched term
    useEffect(() => {
        if (searchedList.length === 0) {
            setErrorMessage("No users found")
        } else {
            setErrorMessage("")
        }
    }, [searchedList]);


    return (
        <div>
            <SearchBar search={searchTerm} onSearch={handleSearch}/>
            <UserList searchedList={searchedList} errorMessage={errorMessage}/>
        </div>
    );
}

export default HomeView;