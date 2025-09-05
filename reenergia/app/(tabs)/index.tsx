import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

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

        <View style={styles.buttonsContainer}>
          <Pressable
            style={({ pressed }) => [{ flex: 1 }, globalStyles.button, globalStyles.bPrimary, pressed && globalStyles.bPrimaryPress]}>
            Comece agora
          </Pressable>

          <Pressable
            style={({ pressed }) => [{ flex: 1 }, globalStyles.button, globalStyles.bSecondary, pressed && globalStyles.bSecondaryPress]}>
            Saiba mais
          </Pressable>
        </View>
      </View>
      <View style={styles.introImgContainer}>
        <Image
          source={require('@/assets/images/intro-img.png')}
          style={styles.introImg}
          resizeMode='contain'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introImgContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  introImg: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  }
});