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
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        gap: 10,
        borderRadius: 5,
        fontSize: 18,
        fontFamily: 'Sans-Serif',
    },
    bPrimary: {
        fontWeight: 'bold',
        backgroundColor: colors.green,
        color: colors.white,
    },
    bPrimaryPress: {
        backgroundColor: colors.green1
    },
    bSecondary: {
        color: colors.gray1,
        borderWidth: 2,
        borderColor: colors.gray1,
    },
    bSecondaryPress: {
        color: colors.green,
        backgroundColor: colors.green1,
        borderColor: colors.green1,
    },
    input : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 5,
        borderWidth: 1,
        borderColor: colors.gray1,
        borderRadius: 5,
        fontSize: 18,
        color: colors.gray,
    }

});
