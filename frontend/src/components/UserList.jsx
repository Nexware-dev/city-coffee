function UserList({data}) {

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.surname}</span>
                        <span>{item.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;