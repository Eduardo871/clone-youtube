import styled from "styled-components";

export const ContainerChip = styled.div`
  width: max-content;
 
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({type}) => {

    if(type === "primary"){
      return (
        `
        padding: 8px;
        border-radius: 4px;        
        `
      )
    }
    if(type === "secondary"){
      return (
        `
        padding: 8px 12px; 
        border-radius: 24px;
        border: 1px solid var(--color-border);
        `
      )
    }
    if(type === "active"){
      return (
        `
        padding: 8px 12px; 
        border-radius: 24px;
        border: 1px solid var(--color-border-secondary);
        background-color: var(--color-background-secondary);
        color: var(--color-primary);
        `
      )
    }

  }}
`;
