import "../assets/styles/components/UserInfo.css";

function UserInfo({ name, surname, email }) {
  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>Name:</label>
        <span>{name}</span>
      </div>
      <div>
        <label>Surname:</label>
        <span>{surname}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
