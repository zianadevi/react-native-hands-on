import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { useTheme } from '../context/ThemeContext';
import Avater from './Avatar';

const HeaderPageLabel = ({text='', showBorder = false, avatarImg = ''}) => {
    const theme = useTheme();
    const styles = styling(theme);
    let borderStyle = {}
    if (showBorder) {
        borderStyle = {
            borderBottomWidth: 1,
            borderBottomColor: 'white',
        }
    }
    return (
        <View style={[styles.label, borderStyle]}>
            <Text style={[theme.text.titleProd, {fontWeight: 'bold'}]}>{text}</Text>
            {avatarImg && <Avater imageUrl={avatarImg}/>}
        </View>
    );
};

const styling = (theme) => StyleSheet.create({
    label : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing.s,
        margin: theme.spacing.s,
        alignItems: 'center'

    }
})

export default HeaderPageLabel;