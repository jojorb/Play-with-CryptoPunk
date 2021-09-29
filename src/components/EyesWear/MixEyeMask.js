import { PixelBlock } from '../Styled.js';

const MixEyeMask = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const Maskshade1 = [
        '12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-8','13-9','13-13','13-17','13-12','13-16',
        '14-9','14-13','14-17','14-12','14-16','14-8',
        '15-9','15-10','15-11','15-12','15-13','15-14','15-15','15-16','15-17',
    ]
    const Maskshade2 = [
        '14-10','14-14'
    ]
    const Maskshade3 = [
        '13-10','13-11','13-14','13-15'
    ]

    return(
    <>
    {f.includes('eyemask') && (
        <>
            {Maskshade1.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {Maskshade2.includes(`${i}-${k}`) && <PixelBlock color="#d8d8d8" />}
            {Maskshade3.includes(`${i}-${k}`) && <PixelBlock color="#a47021" />}
        </>
        )}
    </>
    )
}

export default MixEyeMask;