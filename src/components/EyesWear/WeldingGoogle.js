import { PixelBlock } from '../Styled.js';

const WeldingGoogle = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const TDshade1 = [
        '8-9', '8-12', '8-13', '8-14','8-17',
        '9-8','9-13',
        '10-8','10-13',
        '11-9', '11-12','', '11-14','11-17',
        '12-8','12-17',
    ]
    const TDshade2 = [
        '8-10', '8-11', '8-15', '8-16',
        '9-9','9-12','9-14','9-17',
        '10-9','10-12','10-14','10-17',
        '11-10', '11-11', '11-15', '11-16',
    ]
    const TDshade3 = [
        '9-10','9-11','9-15','9-16',
        '10-10','10-11','10-15','10-16',
    ]
    const TDshade4 = [
        '11-13',
    ]

    return(
    <>
    {f.includes('weldingGoogle') && (
        <>
            {TDshade1.includes(`${i}-${k}`) && <PixelBlock color="#151400" />}
            {TDshade4.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {TDshade2.includes(`${i}-${k}`) && <PixelBlock color="#514c00" />}
            {TDshade3.includes(`${i}-${k}`) && <PixelBlock color="#89dcdb" />}
        </>
        )}
    </>
    )
}

export default WeldingGoogle;