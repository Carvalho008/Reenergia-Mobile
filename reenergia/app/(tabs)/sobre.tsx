import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '../../components/ui/Header';

export default function Sobre() {
  return (
    <View style={globalStyles.screenMain}>
      <Header icon='list' title='Sobre' />
    </View>
  );
}

const styles = StyleSheet.create({});
