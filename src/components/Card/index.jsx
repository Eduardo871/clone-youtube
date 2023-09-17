/* eslint-disable react/prop-types */
import { ContainerCard, ContainerText } from "./localStyle";
import Avatar from "../Avatar";
import { Option } from "../../assets/icons/Option";

const Card = ({title, views, img}) => {
    return (  
        <ContainerCard>
            <img className="img-avatar" src={img} alt="simulación de video" />
            <ContainerText>
                <div className="first">
                <Avatar type={"large"} />
                </div>
                <div className="second">
                <h1>{title}</h1>
                <span>{views}</span>
                </div>
                <div className="third">
                    <Option />
                </div>          
            </ContainerText>
        </ContainerCard>
    );
}
 
export default Card; 