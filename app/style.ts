import styled from "styled-components/native";
import { headerBackgroundLogo, plusIcon } from "@assets";
import { TextInput, Text } from 'react-native';

export const HeaderBackground = styled(headerBackgroundLogo)``;

export const PlusIcon = styled(plusIcon)``;

export const Container = styled.View`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding-top: 88px;
  position: absolute;
  z-index: 2;
  color: #fff;
  gap: 10px;
`;

export const TitleMainContainer = styled.View`
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  color: #FFF;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const FormsContainer = styled.View`
  display: flex; 
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TopFormsContainer = styled.View``;

export const ItemFormBlock = styled.View``;

export const SubTitleInput = styled.View`
  margin-bottom: 8px;
`;

export const InputNameItem = styled(TextInput)`
  height: 40px;
  border: 1px solid #252529;
  border-radius: 6px;
  padding: 12px;
`;

export const BottomFormsContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AmountFormBlock = styled.View`
  width: 36%;
`;

export const BlockInputsAmount = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

export const InputAmount = styled(TextInput)` 
  height: 40px;
  border: 1px solid #252529;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 12px;
  width: 50%;
`;

export const CategoryFormBlock = styled.View`
  width: 48%;
`;

export const InputCategory = styled(TextInput)` 
  height: 40px;
  border: 1px solid #252529;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 12px;
  width: 100%;
`;

export const BlockButtonSendForm = styled.View`
  display: flex;
  width: 12%;
  position: relative;
`;


export const ButtonSendForm = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-radius: 99px;
  background: #7450ac;
  border: none;
  z-index: 4000;
`;