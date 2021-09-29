import { PixelBlock } from '../Styled.js';

const MixHeadBand = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const headband1 = ['11-9','11-10','11-11','11-12','11-13','11-14','11-15','11-16',]
    const headband2 = ['10-9','10-10','10-11','10-12','10-13','10-14','10-15','10-16',]

    return(
    <>
    {f.includes('headband') && (
        <>
            {headband1.includes(`${i}-${k}`) && <PixelBlock color="#2f69d8" />}
            {headband2.includes(`${i}-${k}`) && <PixelBlock color="white" />}
        </>
        )}
    </>
    )
}

export default MixHeadBand;