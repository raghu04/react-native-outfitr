import React, { useState } from 'react'
import { Text, Box } from '../../../components';
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
    label: string;
}

const CheckBox = ({ label }: CheckBoxProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <RectButton 
            onPress={() => setChecked((c) => !c)}
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
                <Text variant="button" color="primary">{label}</Text>
            </Box>
        </RectButton>
    )
}

export default CheckBox
