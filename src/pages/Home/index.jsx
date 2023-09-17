import { Compass } from "../../assets/icons/Compass";
import Card from "../../components/Card";
import Chip from "../../components/Chip";
import MapperComponent from "../../components/MapperComponent/MapperComponent";
import { allChips } from "../../data/chips";
import { allVideos } from "../../data/videos";
import { ContainerCard, ContainerChips, ContainerHome, LineSeparatorVertical } from "./localStyle";


const Home = () => {
  
  return (
    <ContainerHome>
      <ContainerChips>
        <Chip icon={<Compass />} text="Explore" type="primary" />
        <LineSeparatorVertical />
        <div className="other-chips">
        <MapperComponent list={allChips}   Component={Chip} />
        </div>
      
      </ContainerChips>
      <ContainerCard>
       <MapperComponent list={allVideos} Component={Card} />    
      </ContainerCard>
    </ContainerHome>
  );
};

export default Home;
