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
                            backgroundColor: isChecked ? '#2F723D' : '',
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
                <CategoryItemIcon>
                    <FruitIcon />
                </CategoryItemIcon>
                <ConfigurationItemButton>
                    <ConfigurationIcon />
                </ConfigurationItemButton>
            </RightContainer>
        </ItemUnitContainer>
    );
};

export default ItemUnit;
