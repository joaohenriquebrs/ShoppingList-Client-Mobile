import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    CustomDropdownContainer,
    SelectedItem,
    TextMainSelect,
    DropdownList,
    DropdownListItem,
    TitleBlockItem
} from './styles';
import { Text } from 'react-native';

const CustomDropdownAmount = ({ options, onSelect }) => {
    const insets = useSafeAreaInsets();
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <CustomDropdownContainer>
            <SelectedItem onPress={() => setIsOpen(!isOpen)}>
                <TextMainSelect>{selectedValue ? selectedValue : "UN."}</TextMainSelect>
            </SelectedItem>
            {isOpen && (
                <DropdownList>
                    {options.map((item) => (
                        <DropdownListItem key={item.value} onPress={() => handleSelect(item.value)}>
                            <Text style={{ color: '#FFF' }}>{item.label}</Text>
                        </DropdownListItem>
                    ))}
                </DropdownList>
            )}
        </CustomDropdownContainer>
    );
};

export default CustomDropdownAmount;
