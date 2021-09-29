import { PixelBlock, PixelBlockGlow } from '../Styled.js';

const MixClownEyes = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const leftClownEyesDot = ['14-10'];
    const leftClownEyesShade1 = ['15-10', '12-11']
    const leftClownEyesShade2 = ['13-10', '13-11']
    const leftClownEyesShade3 = ['14-11']

    const rightClownEyesDot = ['14-15'];
    const rightClownEyesShade1 = ['15-15', '12-16']
    const rightClownEyesShade2 = ['13-15', '13-16']
    const rightClownEyesShade3 = ['14-16']

    return(
    <>
    {f.includes('ClownEyes') && (
        <>
            {leftClownEyesDot.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {leftClownEyesShade1.includes(`${i}-${k}`) && <PixelBlockGlow color="#33b43b" />}
            {leftClownEyesShade2.includes(`${i}-${k}`) && <PixelBlockGlow color="#32983b" />}
            {leftClownEyesShade3.includes(`${i}-${k}`) && <PixelBlockGlow color="#29652f" />}
    
            {rightClownEyesDot.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {rightClownEyesShade1.includes(`${i}-${k}`) && <PixelBlockGlow color="#33b43b" />}
            {rightClownEyesShade2.includes(`${i}-${k}`) && <PixelBlockGlow color="#32983b" />}
            {rightClownEyesShade3.includes(`${i}-${k}`) && <PixelBlockGlow color="#29652f" />}
        </>
        )}
    </>
    )
}

export default MixClownEyes;