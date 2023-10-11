import React from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Header() {
    return (
        <>
            <SafeAreaProvider>
                <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={docsNavigate}>
                        <Icon name="description" color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={playgroundNavigate}
                        >
                        <Icon type="antdesign" name="rocket1" color="white" />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{ text: 'Header', style: styles.heading }}
                />
            </SafeAreaProvider>
        </>
    )
}

export default Header