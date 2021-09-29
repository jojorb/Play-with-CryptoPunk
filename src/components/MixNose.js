import { PixelBlock } from './Styled.js';

const MixNose = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const noseGrid = ['17-13'];
    const ClownNose = ['17-13','17-14','16-13','16-14'];
    const ApeNose = [];

    const lipstick = '#5c1800';
    const rednose = '#c01f00';

    return(
    <>
        {f.includes('clownNose') && (
            ClownNose.includes(`${i}-${k}`) && <PixelBlock color={rednose} />
            )}
            {f.includes('lipstick') ? (
            ApeNose.includes(`${i}-${k}`) && <PixelBlock color={lipstick} />
            ) : (
            noseGrid.includes(`${i}-${k}`) && <PixelBlock color="black" />
        )} 
    </>
    )
}

export default MixNose;