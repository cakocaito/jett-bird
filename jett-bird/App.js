import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import JettBird from './components/Bird';
import Obstaculos from './components/Obstaculos';

export default function App() {
  const larguraTela = Dimensions.get("screen").width
  const alturaTela = Dimensions.get("screen").height
  const esquerdaPassaro = larguraTela/2
  const [baixoPassaro, setBaixoPassaro] = useState(alturaTela/2)
  const gravidade = 3
  let temporizador
  const larguraObstaculo = 60
  const comprimentoObstaculo = 300
  const gap = 50
  const [obstaculosEsquerda, setObstaculosEsquerda] = useState(larguraTela)
  let temporizadorObstaculosEsquerda
  
  
  //começa queda do pássaro
  useEffect(()=> {
    if(baixoPassaro > 0){
      temporizador = setInterval(() =>{
        setBaixoPassaro(baixoPassaro => baixoPassaro - gravidade)
      }, 30)
      
      return () => {
        clearInterval(temporizador)
      }
    }
  }, [baixoPassaro])
  console.log(baixoPassaro)
  //Primeiro obstáculo
  useEffect(() => {
    if (obstaculosEsquerda > 0){
      temporizadorObstaculosEsquerda = setInterval(() => {
        setObstaculosEsquerda(obstaculosEsquerda => obstaculosEsquerda - 5)
      },30)
      return () => {
        clearInterval(temporizadorObstaculosEsquerda)
      }
    }
  
  }, [obstaculosEsquerda])


  return (
    <View style={styles.container}>
      <JettBird
        baixoPassaro = {baixoPassaro}
        esquerdaPassaro = {esquerdaPassaro}
      /> 
      <Obstaculos 
        obstaculosEsquerda = {obstaculosEsquerda}
        larguraObstaculo = {larguraObstaculo}
        comprimentoObstaculo = {comprimentoObstaculo}
        gap = {gap}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
