import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import { colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/Styles';
import { fonts } from '@/constants/Typografy';

import Header from '@/components/ui/Header';

export default function Sobre() {

  const equipe: Membro[] = [
    {
      nome: 'Ayslan Sena',
      descricao: 'Desenvolvedor, Tech Lead',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FYXBNpXU.png&w=256&q=75',
    },
    {
      nome: 'Ryan Reis',
      descricao: 'Desenvolvedor, Programador Frontend',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FY2e5JWM.png&w=256&q=75',
    },
    {
      nome: 'J.Victor Reis',
      descricao: 'Desenvolvedor, Programador Backend',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FVG6xdHd.png&w=256&q=75',
    },
    {
      nome: 'P.Levy Ponciano',
      descricao: 'Desenvolvedor, Copywriter',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FtatFErB.png&w=256&q=75',
    },
    {
      nome: 'Lian Carvalho',
      descricao: 'Desenvolvedor, Designer',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FzcnQdVf.png&w=256&q=75',
    },
    {
      nome: 'Ryan Moreira',
      descricao: 'Desenvolvedor, Ilustrador',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FtGXQGrH.png&w=256&q=75',
    },
  ]

  const apoiadores: Membro[] = [
    {
      nome: 'Felipe Bastos',
      descricao: 'Professor e Orientador',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FRjvHK0Z.png&w=256&q=75',
    },
    {
      nome: 'Andressa Bezerra',
      descricao: 'Professora e Orientadora',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F236kzM2.png&w=256&q=75',
    },
    {
      nome: 'Gabriel Jonas',
      descricao: 'Professor e Orientador',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FA7fiTuf.png&w=256&q=75',
    },
    {
      nome: 'Régis Nogueira',
      descricao: 'Professor e Orientador',
      imagem: 'https://reenergia.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F91aDSTp.png&w=256&q=75',
    },
  ]

  return (
    <View style={globalStyles.screenMain}>
      <Header icon='list' title='Sobre' />
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.l, fonts.bold, { color: colors.shadowGreen }]}>Nossa equipe</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}>
          {equipe.map((membro, index) => (
            <CardMembro key={index} membro={membro} />
          ))}
        </ScrollView>
      </View>
      <View style={globalStyles.sectionBlock}>
        <Text style={[fonts.l, fonts.bold, { color: colors.shadowGreen }]}>Nossos apoiadores</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}>
          {apoiadores.map((membro, index) => (
            <CardMembro key={index} membro={membro} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
});


interface Membro {
  nome: string;
  descricao: string;
  imagem?: string;
}

type CardMembroProps = {
  membro: Membro;
};

function CardMembro({ membro }: CardMembroProps) {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.cardImgContainer}>
        <Image
          source={{ uri: membro.imagem }}
          style={cardStyles.cardImg}
          resizeMode='cover'
        />
      </View>
      <View style={cardStyles.infosContainer}>
        <Text style={[fonts.bold, fonts.m, { color: colors.black }]}>{membro.nome}</Text>
        <Text style={[fonts.xs, { color: colors.gray1 }]}>{membro.descricao}</Text>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    gap: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.gray1,
    marginRight: 15,
  },
  cardImgContainer: {
    width: '100%',
    height: 100,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 0,
  },
  infosContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
});