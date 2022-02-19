import { Image, View } from 'react-native';

const Obstaculos = (obstaculosEsquerda, larguraObstaculo, comprimentoObstaculo, gap) => {
    
    return (
    <>
        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            width: larguraObstaculo,
            height: comprimentoObstaculo,
            left: obstaculosEsquerda,
            bottom: 0 + comprimentoObstaculo + gap,
        }}/>
        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            width: larguraObstaculo,
            height: comprimentoObstaculo,
            left: obstaculosEsquerda,
            bottom: 0,
        }}/>
    </>
    )
}

export default Obstaculos