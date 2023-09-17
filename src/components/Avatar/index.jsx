/* eslint-disable react/prop-types */
import { ContainerAvatar } from "./localStyle";
import avatar from "../../assets/images/avatarExample.jpg";

const Avatar = ({type}) => {
    return (
        <ContainerAvatar type={type}>
            <img src={avatar} alt="avatar" />
        </ContainerAvatar>
    );
};

export default Avatar;
