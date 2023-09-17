import { ContainerAvatar } from "./localStyle";
import avatar from "../../assets/images/avatarExample.jpg";

const Avatar = () => {
    return (
        <ContainerAvatar>
            <img src={avatar} alt="avatar" />
        </ContainerAvatar>
    );
};

export default Avatar;
