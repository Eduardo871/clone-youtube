import { ContainerChip } from "./localStyle";

// eslint-disable-next-line react/prop-types
const Chip = ({text, type, icon}) => {
  return <ContainerChip type={type}> {icon} {text}</ContainerChip>;
}  ;

export default Chip;
