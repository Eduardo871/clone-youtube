const MapperComponent = ({list, Component}) => {
  return (
    list.map((props, index) => {
        return <Component key={index} {...props} />;
      }
    )
  )
};

export default MapperComponent;
