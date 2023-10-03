import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Boton from './Components/Boton';


export default function App() {
  
  const [contador,setContador]=useState(0);
  

  const aumentar = () =>{
    const nuevoValor = contador + 1;
    setContador(nuevoValor)
  }

  useEffect(()=>{
    console.log(contador)
  })

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={{color:'white'}}>Counter in React Native
        </Text>  

          <Boton onPress={aumentar}/>
        
        <Text 
          style={{color:'#fff',marginTop:40,fontSize:40}}
        >
            {contador}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
