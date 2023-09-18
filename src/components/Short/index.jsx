import { ContainerShort } from "./localStyle";

// eslint-disable-next-line react/prop-types
const Short = ({title, view, img}) => {
    return ( 
        <ContainerShort>
            <img  className="short-image" src={img} alt="short de prueba"/>
            <h1>{title}</h1>
            <span>{view}</span>
        </ContainerShort>
     );
}
 
export default Short;