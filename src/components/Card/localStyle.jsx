import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  height: max-content;
  .img-avatar {
    width: 100%;
    height: 215px;
  }
`;

export const ContainerText = styled.div`
  margin: auto;
  height: 54px;
  display: flex;
  padding-top: 14px;
  padding: 10px;
  padding-bottom: 0;
  h1 {
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    text-align: left;
    font-weight: 500;
  }
  span {
    color: var(--color-border-secondary);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .first {
    margin-right: 12px;
  }
  .third {
    display: flex;
  }
 
`;
