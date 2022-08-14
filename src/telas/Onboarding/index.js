import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import { Carrossel } from '../../componentes/Carrossel';
import itens from './cards';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  const animacaoCustomizada = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  LayoutAnimation.configureNext(animacaoCustomizada);

  function avancar() {
    if (fazerLogin) {
      navigation.navigate('Principal');
    } else {
      LayoutAnimation.linear();
      setAltura(400);
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
            <Carrossel data={itens} tempoAnimacao={2000} />
          )}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Hi! access your account"
                texto="Enter your information. If you don't have an account, create one now"
              />
              :
              <View>
                <Text style={styles.titulo}>Manage your medical care</Text>
                <Text style={styles.texto}>
                  you can manage all your medical care and see the average time for each, and the number of medical care performed.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>{fazerLogin ? 'LogIn' : 'Begin'}</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}