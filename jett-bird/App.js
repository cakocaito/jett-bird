import { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
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
  const gap = 150
  const [obstaculosEsquerda, setObstaculosEsquerda] = useState(larguraTela)
  const [obstaculosEsquerda1, setObstaculosEsquerda1] = useState(larguraTela + larguraTela/2)
  const [alturaNegativaObstaculos, setAlturaNegativaObstaculos] = useState(0)
  const [alturaNegativaObstaculos1, setAlturaNegativaObstaculos1] = useState(0)
  let temporizadorObstaculosEsquerda
  let temporizadorObstaculosEsquerda1
  const [isFimDeJogo, setIsFimDeJogo] = useState(false)
  
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

  const pular = () => {
    if (!isFimDeJogo && (baixoPassaro < alturaTela)){
      setBaixoPassaro(baixoPassaro => baixoPassaro +50)
      console.log('pulou')
    }
  }

  //Primeiro obstáculo
  useEffect(() => {
    if (obstaculosEsquerda > -larguraObstaculo){
      temporizadorObstaculosEsquerda = setInterval(() => {
        setObstaculosEsquerda(obstaculosEsquerda => obstaculosEsquerda - 5)
      },30)
      return () => {
        clearInterval(temporizadorObstaculosEsquerda)
      }
    } else{
      setObstaculosEsquerda(larguraTela)
      setAlturaNegativaObstaculos(- Math.random() * 100)
    }
  
  }, [obstaculosEsquerda])
  //Segundo obstáculo
  useEffect(() => {
    if (obstaculosEsquerda1 > -larguraObstaculo){
      temporizadorObstaculosEsquerda1 = setInterval(() => {
        setObstaculosEsquerda1(obstaculosEsquerda1 => obstaculosEsquerda1 - 5)
      },30)
      return () => {
        clearInterval(temporizadorObstaculosEsquerda1)
      }
    } else{
      setObstaculosEsquerda1(larguraTela)
      setAlturaNegativaObstaculos1 (- Math.random() * 100)
    }
  
  }, [obstaculosEsquerda1])

 //Colisões
  useEffect(() => {
    if
    ((baixoPassaro < (alturaNegativaObstaculos + comprimentoObstaculo + 30)) ||
    baixoPassaro > (alturaNegativaObstaculos + comprimentoObstaculo - 30 + gap) &&
    (obstaculosEsquerda > larguraTela/2 -30 && obstaculosEsquerda < larguraTela/2 +30)
    ||
    (baixoPassaro < (alturaNegativaObstaculos1 + comprimentoObstaculo + 30)) ||
    baixoPassaro > (alturaNegativaObstaculos1 + comprimentoObstaculo - 30 + gap) &&
    (obstaculosEsquerda1 > larguraTela/2 -30 && obstaculosEsquerda1 < larguraTela/2 +30)
    ){
      console.log('game over')
      fimDeJogo()
    }
  })

const fimDeJogo = () =>{
  clearInterval(temporizador)
  clearInterval(temporizadorObstaculosEsquerda)
  clearInterval(temporizadorObstaculosEsquerda1)
  setIsFimDeJogo(true)
}
  return (
    <TouchableWithoutFeedback onPress={pular}>
    <View style={styles.container}>
      <JettBird
        baixoPassaro = {baixoPassaro}
        esquerdaPassaro = {esquerdaPassaro}
      /> 
      <Obstaculos 
        color = {'yellow'}
        obstaculosEsquerda = {obstaculosEsquerda}
        larguraObstaculo = {larguraObstaculo}
        comprimentoObstaculo = {comprimentoObstaculo}
        baixoAleatorio = {alturaNegativaObstaculos}
        gap = {gap}
      />
      <Obstaculos 
        color = {'green'}
        obstaculosEsquerda = {obstaculosEsquerda1}
        larguraObstaculo = {larguraObstaculo}
        comprimentoObstaculo = {comprimentoObstaculo}
        baixoAleatorio = {alturaNegativaObstaculos1}
        gap = {gap}
      />
    </View>
    </TouchableWithoutFeedback>
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
