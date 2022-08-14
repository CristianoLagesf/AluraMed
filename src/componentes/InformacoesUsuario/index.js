import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export function InformacoesUsuario({ name, details, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.informacoes}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.consultas}>{details}</Text>
      </View>
    </View>
  );
}