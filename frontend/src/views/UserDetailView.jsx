import { useParams } from "react-router-dom";

function UserDetailView() {
    const { user_id } = useParams();

    return (
        <h1>Current user id: {user_id}</h1>
    );
}

export default UserDetailView;