import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

import { useState } from 'react';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

export default function Login() {

    type Usuario = {
        nome: string;
        id: string;
        last_section: string;
        creating_date: string;
    };

    const [user, setUser] = useState<Usuario | null>(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [overlay, setOverlay] = useState(false);

    const showOverlay = () => {
        setOverlay(true);
    };

    const hideOverlay = () => {
        setOverlay(false);
    };


    const handleLogin = () => {
        let usuario = {
            'nome': username,
            'id': '23901493052380',
            'last_section': '1 de Janeiro de 2001',
            'creating_date': '01/01/0001'
        }
        setUser(usuario);
        hideOverlay();
    };

    const handleLogout = () => {
        setUser(null);
        setUsername('');
        setPassword('');
    };



    return (
        <View style={globalStyles.screenMain}>
            <Header icon='person-sharp' title='Usuário' />

            {!user && (
                <View style={globalStyles.sectionBlock}>
                    <Text style={[fonts.l, fonts.bold, { color: colors.green2 }]}>Usuário não logado</Text>
                    <Text style={[fonts.s, { color: colors.gray }]}>Faça login para ver mais informações</Text>
                    <Pressable
                        onPress={showOverlay}
                        style={({ pressed }) => [globalStyles.button, globalStyles.bPrimary, pressed && globalStyles.bPrimaryPress]}>
                        Entrar
                    </Pressable>
                </View>
            )}

            {user && (
                <View style={[globalStyles.sectionBlock, { backgroundColor: colors.white }]}>
                    <Text style={[fonts.l, fonts.bold, { color: colors.black }]}>{user.nome}</Text>
                    <Text style={[fonts.xs, { color: colors.grayMinus1 }]}>ID: {user.id}</Text>
                    <Text style={[fonts.s, { color: colors.gray1 }]}>
                        Cadastrado no dia {user.creating_date}<br />
                        Última sessão ativa em {user.last_section}
                    </Text>
                    <Pressable
                        onPress={handleLogout}
                        style={({ pressed }) => [globalStyles.button, globalStyles.bSecondary, pressed && globalStyles.bSecondaryPress]}>
                        Sair
                    </Pressable>
                </View>
            )}

            {overlay && (
                <View style={styles.overlay}>
                    <View style={styles.loginForm}>
                        <Text style={[fonts.xl, fonts.bold, { color: colors.black }]}>Login</Text>
                        <View style={styles.inputContainer}>
                            <Text style={[fonts.xs, { color: colors.grayMinus1 }]}>Nome do usuário</Text>
                            <TextInput
                                placeholder='Nome do usuário'
                                onChangeText={setUsername}
                                style={globalStyles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[fonts.xs, { color: colors.grayMinus1 }]}>Senha</Text>
                            <TextInput
                                placeholder='Senha'
                                onChangeText={setPassword}
                                style={globalStyles.input}
                            />
                        </View>
                        <Text style={[fonts.xs, { color: colors.gray, width: '100%' }]}>*Não compartilhe a sua senha</Text>
                        <Pressable
                            onPress={handleLogin}
                            style={({ pressed }) => [{ width: '100%' }, globalStyles.button, globalStyles.bPrimary, pressed && globalStyles.bPrimaryPress]}>
                            Fazer login
                        </Pressable>
                    </View>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(2px)',
    },
    loginForm: {
        display: 'flex',
        width: '100%',
        maxWidth: 500,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 25,
        gap: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: 5,
    }
});