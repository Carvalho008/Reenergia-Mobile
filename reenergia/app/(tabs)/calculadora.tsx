import { colors } from '@/constants/Colors';

import { View, Text, StyleSheet } from 'react-native';

export default function CalculadoraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shadowGreen,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
