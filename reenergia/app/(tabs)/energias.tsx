import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '../components/Header';

export default function EnergiasScreen() {
  return (
    <View style={globalStyles.screenMain}>
      <Header icon='earth' title='Energias pelo mundo' />
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.m, fonts.bold, { color: colors.green2 }]}>Destaque</Text>
      </View>
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.m, fonts.bold, { color: colors.green1 }]}>Gráficos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
