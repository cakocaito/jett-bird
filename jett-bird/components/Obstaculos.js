import { Image, View } from 'react-native';

const Obstaculos = ({color, obstaculosEsquerda, larguraObstaculo, comprimentoObstaculo, gap, baixoAleatorio}) => {
    
    return (
    <>
        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: larguraObstaculo,
            height: comprimentoObstaculo,
            left: obstaculosEsquerda,
            // top: 0,
            bottom: baixoAleatorio + comprimentoObstaculo + gap,
        }}/>
        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: larguraObstaculo,
            height: comprimentoObstaculo,
            left: obstaculosEsquerda,
            bottom: baixoAleatorio,
        }}/>
    </>
    )
}

export default Obstaculos