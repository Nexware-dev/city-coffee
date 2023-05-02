import users from "../components/UserListData";

import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';

import React, { useState, useEffect } from 'react';

function HomeView() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedList = users.filter((user) => 
        user.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
    );

    return (
        <div>
            <SearchBar search={searchTerm} onSearch={handleSearch}/>
            <UserList data={searchedList} />
        </div>
    );
}

export default HomeView;