import { useParams } from "react-router-dom";
import CoffeeStamps from "../components/CoffeeStamps";
import UserInfo from "../components/UserInfo";

function UserDetailView() {
    const { user_id } = useParams();

    return (
        <div>
            <h1>Current user id: {user_id}</h1>
            <UserInfo />
            <CoffeeStamps />
        </div>
    );
}

export default UserDetailView;