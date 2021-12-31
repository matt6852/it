import ImgBg from "../Imgbagraund";
import ava from "../../../assets/profileAva.png";

const ProfileInfo = () => {
    return (
        <>
            <div>
                <ImgBg/>
                <div>
                    <img src={ava} alt=""/>
                </div>
                <div>
                    <p> profile info </p>
                </div>
            </div>
        </>
    )
}
export default ProfileInfo