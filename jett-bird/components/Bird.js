import { Image } from 'react-native';

const JettBird = ({baixoPassaro, esquerdaPassaro}) => {
    const larguraPassaro = 50
    const alturaPassaro = 60
    return(
        <Image source={require('../assets/jett.png')} style={{
            position: 'absolute',
            // backgroundColor: 'none',
            width: larguraPassaro,
            height: alturaPassaro,
            left: esquerdaPassaro - (larguraPassaro/2),
            bottom: baixoPassaro - (alturaPassaro/2),
        }}/>
    )
}

export default JettBird