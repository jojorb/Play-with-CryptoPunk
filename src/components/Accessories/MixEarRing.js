import { PixelBlock } from '../Styled.js';

const MixEarRing = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const EarRingGrid = ['15-7'];
    const EarRingGridShade1 = ['15-6','16-7'];

    return(
    <>
        {f.includes('earring') && (
            <>
                {EarRingGrid.includes(`${i}-${k}`) && <PixelBlock color="#fbdd00" />}
                {EarRingGridShade1.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            </>
            )}
    </>
    )
}

export default MixEarRing;