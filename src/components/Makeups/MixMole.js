import { PixelBlock } from '../Styled.js';

const MixMole = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const moleShade = ['17-10']

    return(
    <>
    {f.includes('mole') && (
        <>
            {moleShade.includes(`${i}-${k}`) && <PixelBlock color="#907854" />}
        </>
        )}
    </>
    )
}

export default MixMole;