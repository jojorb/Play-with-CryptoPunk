import { PixelBlock } from '../Styled.js';

const MixMohawk = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const mohawkShade1 = ['10-14','9-14','9-13','8-14','8-13','8-12','7-14','7-13','6-14','6-13','5-14']
    const mohawkShade2 = ['8-11','7-12']
    const mohawkShade3 = ['7-11','6-12','5-13','4-14','4-15','5-15','6-15','7-15']

    return(
    <>
    {f.includes('nohawk') && (
        <>
            {mohawkShade1.includes(`${i}-${k}`) && <PixelBlock color="#a47021" />}
            {mohawkShade2.includes(`${i}-${k}`) && <PixelBlock color="#835711" />}
            {mohawkShade3.includes(`${i}-${k}`) && <PixelBlock color="black" />}
        </>
        )}
    </>
    )
}

export default MixMohawk;