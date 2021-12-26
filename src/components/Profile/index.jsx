import ava from "../../assets/profileAva.png";
const ProfilePage = () => {
  return (
    <div>
      <div>
        <img src={ava} alt="" />
      </div>
      <div>
        <p> profile info </p>
      </div>
    </div>
  );
};

export default ProfilePage;
