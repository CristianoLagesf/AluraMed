import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather';

export function CardConsulta({ name, image, time, typeofCons, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={image} style={styles.image} />
        <View style={styles.informacoes}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.consultaArea}>
            <Icon name={icon} size={16} color="#A3A3A3" />
            <Text style={styles.consultas}>{typeofCons}</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Text style={styles.texto}>{time}</Text>
        <View style={styles.botoesArea}>
          {icon === "video" ?
            <>
              <TouchableOpacity style={[styles.botao, { backgroundColor: '#FFB050' }]}>
                <Text style={styles.botaoTexto}>Video call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Phone call</Text>
              </TouchableOpacity>
            </> :
            <TouchableOpacity style={styles.botaoLocalizacao}>
              <Text style={[styles.botaoTexto, { color: '#FFF' }]}>Address</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}