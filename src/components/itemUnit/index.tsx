import React, { useState } from 'react';
import {
    ItemUnitContainer,
    LeftContainer,
    CheckboxContainer,
    DetailsItem,
    NameItem,
    AmountItem,
    RightContainer,
    CategoryItemIcon,
    ConfigurationItemButton,
    FruitIcon,
    VegetableIcon,
    MeatIcon,
    DrinkIcon,
    BakeryIcon,
    ConfigurationIcon
} from './styles';
import { Text, TouchableOpacity } from 'react-native';

interface ItemUnitProps {
    name: string;
    amount: string;
    category: string;
}

const ItemUnit: React.FC<ItemUnitProps> = ({ name, amount, category }) => {
    const [isChecked, setIsChecked] = useState(false);

    const renderCategoryIcon = () => {
        switch (category) {
            case 'Fruta':
                return <FruitIcon />;
            case 'Padaria':
                return <BakeryIcon />;
            case 'Legume':
                return <VegetableIcon />;
            case 'Bebida':
                return <DrinkIcon />;
            case 'Carne':
                return <MeatIcon />;
            default:
                return <FruitIcon />;
        }
    };

    return (
        <ItemUnitContainer isChecked={isChecked}>
            <LeftContainer>
                <CheckboxContainer>
                    <TouchableOpacity
                        onPress={() => setIsChecked(!isChecked)}
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: 2,
                            borderWidth: isChecked ? 0 : 2,
                            borderColor: isChecked ? 'transparent' : '#A881E6',
                            backgroundColor: isChecked ? '#2F723D' : 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {isChecked && <Text style={{ color: '#FFFFFF', fontSize: 10 }}>✓</Text>}
                    </TouchableOpacity>
                </CheckboxContainer>
                <DetailsItem>
                    <NameItem>
                        <Text style={{ color: '#FBF9FE', fontSize: 14 }}>{name}</Text>
                    </NameItem>
                    <AmountItem>
                        <Text style={{ color: '#AFABB6', fontSize: 12 }}>{amount}</Text>
                    </AmountItem>
                </DetailsItem>
            </LeftContainer>
            <RightContainer>
                <CategoryItemIcon category={category}>
                    {renderCategoryIcon()}
                </CategoryItemIcon>
                <ConfigurationItemButton>
                    <ConfigurationIcon />
                </ConfigurationItemButton>
            </RightContainer>
        </ItemUnitContainer>
    );
};

export default ItemUnit;
