import { Link } from "react-router-dom";

function UserList({searchedList, errorMessage}) {

    return (
        <div style={{padding: "10px 150px"}}>

            {searchedList.length === 0 && 
                <h1>{errorMessage}</h1>
            }

            {searchedList.map((item) => (
                <Link to={`/user_detail/${item.id}`} key={item.id}>
                    <div style={{border: "1px solid black", textAlign: "center", margin: "10px"}}>
                        <h2>{item.name} {item.surname}</h2>
                        <p>{item.email}</p>
                    </div>
                </Link>
                ))}
        </div>
    );
}

export default UserList;
