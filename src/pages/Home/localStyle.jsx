import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  background-color: var(--color-primary);
`;

export const ContainerChips = styled.div`
  padding: 10px;
  padding-top: 12px;
  padding-bottom: 10px;
  display: flex;
  overflow-x: auto;
  align-items: center;
  margin: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .other-chips {
    display: flex;
    gap: 4px;
  }
  /* display: flex;
  width: 338px;
  margin: auto;
  overflow: auto;
  padding-top: 10px; */
`;

export const LineSeparatorVertical = styled.div`
  width: 1px;
  height: 28px;
  min-width: 1px;
  min-height: 28px;
  background-color: var(--color-border);
  margin: 0px 12px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerTitleShort = styled.div`
  margin-left: 6px;
  margin-top: 14px;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  .short-beta {
    object-fit: cover;
  }
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ContainerShort = styled.div`
  width: calc(100% - 12px);
  padding-left: 12px;
  padding-bottom: 14px;
  display: flex;
  gap: 12px;
  overflow: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
