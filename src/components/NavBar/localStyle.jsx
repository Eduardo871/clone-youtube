import styled from "styled-components";

export const ContainerNavBar = styled.nav`
position: sticky;
z-index: 5; 
top: 0; 
left: 0;
  display: flex;
  padding: 10px;
  padding-left: 12px;
  padding-bottom:0px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  .youtube-svg {
    width: 90px;
    height: 20px;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 12px;
  }
`;
