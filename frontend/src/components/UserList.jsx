import { Link } from "react-router-dom";

function UserList({data}) {

    return (
        <div>
            {data.map((item) => (
                <div style={{width: "200px", border: "1px solid black", margin: "auto"}}>
                    <Link to={`/user_detail/${item.id}`} key={item.id}>
                        <div style={{textAlign: "center"}}>
                            <h2>{item.name} {item.surname}</h2>
                            <p>{item.email}</p>
                        </div>
                    </Link>
                </div>
                ))}
        </div>
    );
}

export default UserList;