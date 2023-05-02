import { Link } from "react-router-dom";

function UserList({data}) {

    return (
        <div>
            {data.map((item) => (
                <Link to={`/user_detail/${item.id}`} key={item.id}>
                    <div style={{border: "1px solid black"}}>
                        <h2>{item.name} {item.surname}</h2>
                        <p>{item.email}</p>
                    </div>
                </Link>
                ))}
        </div>
    );
}

export default UserList;