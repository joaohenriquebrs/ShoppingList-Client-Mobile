import styled from "styled-components/native";

export const CustomDropdownContainer = styled.View`
  position: relative;
  width: 100%;
  background: #17171a;
  border: 1px solid #252529;
  border-radius: 6px;
  padding: 10px;
  color: #afabb6;
  height: 40px;
`;

export const SelectedItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextMainSelect = styled.Text`
  color: #fff;
`;

export const DropdownList = styled.View`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  top: 42px;
  border: 1px solid #252529;
  border-radius: 6px;
  z-index: 10;
`;

export const DropdownListItem = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #252529;

  &:hover {
    background-color: #252529;
  }
`;

export const TitleBlockItem = styled.Text<{ isOpen: boolean }>`
  font-size: 12px;
  color: ${({ isOpen }) => (isOpen ? '#A881E6' : '#AFABB6')};
`;
