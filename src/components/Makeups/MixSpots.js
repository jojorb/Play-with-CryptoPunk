import { PixelBlock } from '../Styled.js';

const MixSpots = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const spotsShade = [
        '17-10','14-8','21-13','18-16','15-15','10-15','11-12'
    ]

    return(
    <>
    {f.includes('spots') && (
        <>
            {spotsShade.includes(`${i}-${k}`) && <PixelBlock color="#907854" />}
        </>
        )}
    </>
    )
}

export default MixSpots;