import styled from "styled-components/native";
import { fruitIcon, configurationIcon } from "@assets";
import { TextInput } from 'react-native';

export const FruitIcon = styled(fruitIcon)``;
export const ConfigurationIcon = styled(configurationIcon)``;

export const ItemUnitContainer = styled.View<{ isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  border-radius: 8px;
  border: 1px solid #252529;
  background: #17171A;
  padding: 16px;
  opacity: ${({ isChecked }) => (isChecked ? 0.5 : 1)};
`;

export const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const CheckboxContainer = styled.View`
  justify-content: center;
`;

export const DetailsItem = styled.View`
`;

export const NameItem = styled.View`
`;

export const AmountItem = styled.View`
`;

export const RightContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const CategoryItemIcon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  gap: 5px;
  color: #E07B67;
  background: #261A17;
  padding: 8px 16px;
`;

export const ConfigurationItemButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;