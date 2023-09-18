import { Compass } from "../../assets/icons/Compass";
import Card from "../../components/Card";
import Chip from "../../components/Chip";
import MapperComponent from "../../components/MapperComponent/MapperComponent";
import Short from "../../components/Short";
import { allChips } from "../../data/chips";
import { allShorts } from "../../data/shorts";
import { allVideos } from "../../data/videos";
import { ContainerCard, ContainerChips, ContainerHome, ContainerShort, ContainerTitleShort, LineSeparatorVertical } from "./localStyle";
import { ShortIcon } from "../../assets/icons/ShortIcon";

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
       <MapperComponent list={[allVideos[0]]} Component={Card} />    
      </ContainerCard>
      <ContainerTitleShort>
       <ShortIcon /> <span>Shorts</span>
      </ContainerTitleShort>
      <ContainerShort>
        <MapperComponent list={allShorts} Component={Short} />
      </ContainerShort>
      <ContainerCard>
       <MapperComponent list={allVideos} Component={Card} />    
      </ContainerCard>
    </ContainerHome>
  );
};

export default Home;
