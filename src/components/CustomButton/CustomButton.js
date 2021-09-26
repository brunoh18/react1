import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import ImagemGato from '../../assets/gato.jpg'

export default function Home() {

  const [teste, setTeste] = useState(0)

  return (
    <TouchableOpacity onPress={() => setTeste(teste+1)}>
      <ImageBackground source={ ImagemGato } style={ styles.imgStyle }>
        <View style={styles.container}>
          <Text>Cliques {teste}</Text>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    
  },
  imgStyle: {
      flex: 1,
      justifyContent: "center",    
  },
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
