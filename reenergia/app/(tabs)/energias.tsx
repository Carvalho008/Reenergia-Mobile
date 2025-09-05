import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

export default function EnergiasScreen() {

  const energiaExemplo = {
    nome: 'Energia Solar',
    imagem: 'https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-icon-of-sun-png-image_6484830.png',
    curiosidade: '#Top 2 mundial',
    descricao: 'A energia solar vem se destacando pela a sua eficiência em locais de clima temperado, apesar do alto custo de instalação.',
  }

  return (
    <View style={globalStyles.screenMain}>
      <Header icon='earth' title='Energias pelo mundo' />
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.m, fonts.bold, { color: colors.green2 }]}>Destaque</Text>
        <DisplayEnergia energia={energiaExemplo}/>
      </View>
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.m, fonts.bold, { color: colors.green1 }]}>Gráficos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});


interface Energia {
  nome: string;
  curiosidade: string;
  descricao: string;
  imagem?: string;
}

type DisplayEnergiaProps = {
  energia: Energia;
};

function DisplayEnergia({energia} : DisplayEnergiaProps) {
  return(
    <View style={displayStyles.displayContainer}>
      <View style={displayStyles.displayImgContainer}>
        <Image
          source={{uri: energia.imagem}}
          style={displayStyles.displayImg}
          resizeMode='contain'
        />
      </View>
      <View style={displayStyles.infosContainer}>
        <View style={displayStyles.head}>
          <Text style={[fonts.bold, fonts.m, {color: colors.black}]}>{energia.nome}</Text>
          <Text style={[fonts.xs, {color: colors.gray}]}>{energia.curiosidade}</Text>
        </View>
          <Text style={[fonts.s, {color: colors.gray1}]}>{energia.descricao}</Text>
      </View>
    </View>
  );
}

const displayStyles = StyleSheet.create({
  displayContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  displayImgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    aspectRatio: 1,
    maxWidth: 200,
    position: 'relative',
  },
  displayImg: {
    width: '100%',
    height: '100%'
  },
  infosContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 8,
  },
  head: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }

});