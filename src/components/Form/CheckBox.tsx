import React from 'react'
import { Text, Box } from '..';
import { Feather as Icon } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {

    return (
        <BorderlessButton 
            onPress={() => onChange()}
            style={{ justifyContent: 'center' }}
        >
            <Box flexDirection="row" justifyContent="center">
                <Box 
                    width={20}
                    height={20}
                    borderRadius="s" 
                    justifyContent="center"
                    alignItems="center"
                    borderWidth={1}
                    borderColor="primary"
                    marginRight="m"
                    backgroundColor={checked ? "primary" : "white"}
                >
                    <Icon name="check" color="white" />
                </Box>
                <Text variant="button" color="text">{label}</Text>
            </Box>
        </BorderlessButton>
    )
}

export default CheckBox
