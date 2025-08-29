import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router'

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

export default function NotFoundScreen() {
  return (
    <View style={globalStyles.screenMain}>
      <Stack.Screen options={{ headerShown: false }} />

      <Header icon='close' title='Não encontrado' />

      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.l, fonts.bold, { color: colors.green2 }]}>
          Erro, página não encontrada
        </Text>
        <Text style={[fonts.s, { color: colors.black }]}>
          Por favor retorne a <Link style={[fonts.bold, { color: colors.green1, textDecorationLine: 'underline' }]} href='/'>página inicial</Link>
        </Text>
        <Link style={[fonts.bold, { color: colors.green1, textDecorationLine: 'underline' }]} href='/'>Voltar</Link>
        <Text style={[fonts.xs, { color: colors.gray }]}>
          Not Found - 404
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
