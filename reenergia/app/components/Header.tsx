import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/Colors';

interface HeaderProps {
    icon?: keyof typeof Ionicons.glyphMap;
    title?: string;
}

export default function Header({ icon = 'menu', title = 'Titulo' }: HeaderProps) {
    return (
        <View style={styles.header}>
            <Ionicons name={icon} size={25} color={colors.shadowGreen} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        gap: 5,
        borderRadius: 5,
        backgroundColor: colors.greenMinus2,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.shadowGreen,
    },
});
