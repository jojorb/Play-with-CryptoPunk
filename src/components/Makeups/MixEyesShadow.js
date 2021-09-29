import { PixelBlock, PixelBlockGlow } from '../Styled.js';

const EyesShadow = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const leftEyesDot = ['14-10'];
    const leftBlueEyesShade1 = ['14-11']
    const leftBlueEyesShade2 = ['13-10', '13-11']


    const rightEyesDot = ['14-15'];
    const rightBlueEyesShade1 = ['14-16']
    const rightBlueEyesShade2 = ['13-15', '13-16']


    return(
    <>
    {f.includes('EyesShadow') && (
        <>
            {leftEyesDot.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {leftBlueEyesShade1.includes(`${i}-${k}`) && <PixelBlockGlow color="#33b43b" />}
            {leftBlueEyesShade2.includes(`${i}-${k}`) && <PixelBlockGlow color="#32983b" />}

    
            {rightEyesDot.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {rightBlueEyesShade1.includes(`${i}-${k}`) && <PixelBlockGlow color="#33b43b" />}
            {rightBlueEyesShade2.includes(`${i}-${k}`) && <PixelBlockGlow color="#32983b" />}
        </>
        )}
    </>
    )
}

export default EyesShadow;