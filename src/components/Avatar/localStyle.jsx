import styled from "styled-components";

export const ContainerAvatar = styled.div`
  border-radius: 100%;
 
  ${({ type }) => {

    console.log(type);

    if (type === "large") {
      console.log(type);
      return `
        width: 36px;
        height: 36px;
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
        `;
    } else {
      return `  
      width: 24px;
       height: 24px;
       img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      `;
    }
  }}
`;
