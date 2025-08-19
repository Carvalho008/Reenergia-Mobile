import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '../components/Header';

export default function CalculadoraScreen() {
  return (
    <View style={globalStyles.screenMain}>
      <Header icon='calculator' title='Calculadora' />
    </View>
  );
}

const styles = StyleSheet.create({});
