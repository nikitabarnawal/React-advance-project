import avatar from "../image/avatar.svg";
import gmail from "../image/gmail.svg";
import world from "../image/world.svg";
import phoneimg from "../image/phone.svg";

const UserProfile = ({ userData }) => {
  const { name, email, phone, website } = userData;
  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user-detail">
        <h4>{name}</h4>
        <div className="user-info">
          <p>
            <img src={gmail} alt="gmail" />
            {email}
          </p>
          <p>
            <img src={phoneimg} alt="phone" />
            {phone}
          </p>
          <p>
            <img src={world} alt="world" />
            {`http://${website}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
