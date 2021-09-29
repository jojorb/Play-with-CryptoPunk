import { PixelBlock } from './Styled.js';

const MixFaceShade = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const faceShade = ['10-10']

    return(
    <>
    {f.includes('woman') && (
        <>
            {faceShade.includes(`${i}-${k}`) && <PixelBlock color="#b6a182" />}
        </>
        )}
    </>
    )
}

export default MixFaceShade;