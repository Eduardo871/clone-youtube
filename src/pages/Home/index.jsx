import { Compass } from "../../assets/icons/Compass";
import Chip from "../../components/Chip";
import { ContainerChips, ContainerHome, LineSeparatorVertical } from "./localStyle";

const Home = () => {
  return (
    <ContainerHome>
      <ContainerChips>
        <Chip icon={<Compass />} text="Explore" type="primary" />
        <LineSeparatorVertical />
        <div className="other-chips">
        <Chip text="All" type="active" />
        <Chip text="Mixes" type="secondary" />
        <Chip text="Music" type="secondary" />
        <Chip text="Graphic" type="secondary" />
        </div>
      </ContainerChips>
    </ContainerHome>
  );
};

export default Home;
