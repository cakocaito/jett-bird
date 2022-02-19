import { Image } from 'react-native';

const Obstaculos = (obstaculosEsquerda, larguraObstaculo, comprimentoObstaculo, gap) => {
    
    return (
    <>
    <Image source={require('../assets/cano.jpg')} syle={{
        position: 'absolute',
        width: larguraObstaculo,
        height: comprimentoObstaculo,
        left: obstaculosEsquerda,
        bottom: 0 + comprimentoObstaculo + gap,
    }}/>
    <Image source={require('../assets/cano.jpg')} syle={{
        position: 'absolute',
        width: larguraObstaculo,
        height: comprimentoObstaculo,
        left: obstaculosEsquerda,
        bottom: 0,
    }}/>
    </>
    )
}

export default Obstaculos