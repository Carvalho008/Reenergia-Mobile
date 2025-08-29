import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

export default function CalculadoraScreen() {

  const [calc, setCalc] = useState(true)

  return (
    <View style={globalStyles.screenMain}>
      <Header icon='calculator' title='Calculadora' />

      <View style={styles.switch}>
        {/* Botão Calculadora */}
        <Pressable style={[styles.switchButton, calc && styles.active,
        { borderTopLeftRadius: 50, borderBottomLeftRadius: 50 },]}
          onPress={() => setCalc(true)}>
          <Text style={[{ color: colors.gray1 }, calc && styles.active]}>
            Calculadora
          </Text>
        </Pressable>

        {/* Botão Resultados */}
        <Pressable style={[styles.switchButton, !calc && styles.active,
        { borderTopRightRadius: 50, borderBottomRightRadius: 50 },]}
          onPress={() => setCalc(false)}>
          <Text style={[{ color: colors.gray1 }, !calc && styles.active]}>
            Resultados
          </Text>
        </Pressable>
      </View>

      {/* Seção Calculadora */}
      {calc && (
        <View style={globalStyles.sectionBlock}>
          <Text style={[fonts.s, fonts.bold, { color: colors.green2 }]}>Encontre a melhor energia para você...</Text>
        </View>
      )}


      {/* Seção Resultados */}
      {!calc && (
        <View style={[globalStyles.sectionBlock, { backgroundColor: colors.white }]}>
          <Text style={[fonts.s, fonts.bold, { color: colors.black }]}>Resultados</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  switchButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
    padding: 8,
    backgroundColor: colors.grayMinus1,
    opacity: 0.7,
    cursor: 'pointer',
  },
  active: {
    backgroundColor: colors.greenMinus2,
    color: colors.green1,
    opacity: 1,
  }
});