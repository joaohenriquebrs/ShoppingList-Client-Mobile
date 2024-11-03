import React, { useState } from 'react';
import {
  HeaderBackground,
  PlusIcon,
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
  BlockButtonSendForm,
  ButtonSendForm
} from './style';
import { Text } from 'react-native';
import CustomDropdown from '../src/components/customDropdown';
import CustomDropdownAmount from '../src/components/customDropDownAmount';
import ItemUnit from '../src/components/itemUnit';

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

const itemsList = [
  { id: 1, name: 'Maçã', amount: '2 unidades', category: 'Fruta' },
  { id: 2, name: 'Pão Francês', amount: '4 unidades', category: 'Padaria' },
  { id: 3, name: 'Brócolis', amount: '1 unidade', category: 'Legume' },
  { id: 4, name: 'Leite', amount: '2 litros', category: 'Bebida' },
  { id: 5, name: 'Peito de Frango', amount: '2 kg', category: 'Carne' },
  { id: 6, name: 'Mamão', amount: '1 unidade', category: 'Fruta' },
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
            <BlockButtonSendForm>
              <ButtonSendForm>
                <PlusIcon />
              </ButtonSendForm>
            </BlockButtonSendForm>
          </BottomFormsContainer>
        </FormsContainer>

        {itemsList.map((item) => (
          <ItemUnit
            key={item.id}
            name={item.name}
            amount={item.amount}
            category={item.category}
          />
        ))}
      </MainContainer>
    </Container>
  );
};

export default App;
