import { StyleSheet } from "react-native";

import { colors } from "./Colors";

export const globalStyles = StyleSheet.create({
    screenMain: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        gap: 15,
        backgroundColor: colors.shadowGreen,
    },

    sectionBlock: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        gap: 10,
        borderRadius: 5,
        backgroundColor: colors.greenMinus2,
    }
});
