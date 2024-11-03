import React, { useState } from 'react';
import {
  HeaderBackground,
  Container,
  MainContainer,
  TitleMainContainer,
  TextTitle,
  FormsContainer,
  TopFormsContainer,
  ItemFormBlock,
  SubTitleInput,
  InputNameItem,
  BottomFormsContainer,
  AmountFormBlock,
  BlockInputsAmount,
  InputAmount,
  CategoryFormBlock,
  ButtonSendForm
} from './style';
import { Text } from 'react-native';
import CustomDropdown from '../src/components/customDropdown';
import CustomDropdownAmount from '../src/components/customDropDownAmount';

// Opções de unidades e categorias para seleção
const units = [
  { label: 'UN.', value: 'UNIDADE' },
  { label: 'L', value: 'LITRO' },
  { label: 'Kg.', value: 'QUILOGRAMA' }
];

const categories = [
  { label: 'Padaria', value: 'PADARIA' },
  { label: 'Legume', value: 'LEGUME' },
  { label: 'Carne', value: 'CARNE' },
  { label: 'Fruta', value: 'FRUTA' },
  { label: 'Bebida', value: 'BEBIDA' }
];

const App: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Container>
      <HeaderBackground />
      <MainContainer>
        <TitleMainContainer>
          <TextTitle>Lista de Compras</TextTitle>
        </TitleMainContainer>
        <FormsContainer>
          <TopFormsContainer>
            <ItemFormBlock>
              <SubTitleInput>
                <Text style={{ color: '#AFABB6', fontSize: 12 }}>Item</Text>
              </SubTitleInput>
              <InputNameItem />
            </ItemFormBlock>
          </TopFormsContainer>
          <BottomFormsContainer>
            <AmountFormBlock>
              <SubTitleInput>
                <Text style={{ color: '#AFABB6', fontSize: 12 }}>Quantidade</Text>
              </SubTitleInput>
              <BlockInputsAmount>
                <InputAmount />
                <CustomDropdownAmount
                  options={units}
                  onSelect={setSelectedUnit}
                />
              </BlockInputsAmount>
            </AmountFormBlock>
            <CategoryFormBlock>
              <SubTitleInput>
                <Text style={{ color: '#EDEAF0', fontSize: 12 }}>Categoria</Text>
              </SubTitleInput>
              <CustomDropdown
                options={categories}
                onSelect={setSelectedCategory}
              />
            </CategoryFormBlock>
            <ButtonSendForm>
              <TextTitle>+</TextTitle>
            </ButtonSendForm>
          </BottomFormsContainer>
        </FormsContainer>
      </MainContainer>
    </Container>
  );
};

export default App;
