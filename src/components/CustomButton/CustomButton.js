import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import ImagemGato from '../../assets/gato.jpg'

export default function Home() {

  const [teste, setTeste] = useState(0)
  const [Nome, setNome] = useState('')

  const getContent = () => {
    getData()
    .then(response=> {
      setNome(response.data)
    } )
    .catch()
  }

  return (
    <>
    <TouchableOpacity onPress={() => getContent()}>
      <ImageBackground source={ ImagemGato } style={ styles.imgStyle }>
        {Nome && (<View style={styles.container}>
          <Text>Nome do usuario {Nome === ''? 'Sem nome' :Nome }</Text>
          <StatusBar style="auto" />
        </View>)}
        {function()}
      </ImageBackground>
    </TouchableOpacity>
    </>
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
