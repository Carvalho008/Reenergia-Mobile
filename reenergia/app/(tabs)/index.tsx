import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '../../components/ui/Header';

export default function HomeScreen() {
  return (
    <View style={globalStyles.screenMain}>
      <Header icon='home' title='Home' />
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.l, fonts.bold, { color: colors.green2 }]}>
          Descubra qual <Text style={{ color: colors.green1 }}>Energia Renovável</Text> é ideal para você
        </Text>
        <Text style={[fonts.s, { color: colors.gray }]}>Compare fontes, entenda os impactos e
          tome decisões conscientes.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
