import styled from "styled-components";

export const ContainerShort = styled.div`
  min-width: 150px;
  min-height: 250px;
  position: relative;
  .short-image {
    position: absolute;
    z-index: 1;
  }
  h1 {
    position: absolute;
    z-index: 2;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--color-primary);
    bottom: 32px;
    left: 8px;
}
  span {
    position: absolute;
    z-index: 2;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--color-primary);
    bottom: 12px;
    left: 8px;
  }
`;
