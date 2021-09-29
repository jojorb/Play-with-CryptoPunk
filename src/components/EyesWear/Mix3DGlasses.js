import { PixelBlock } from '../Styled.js';

const Mix3DGlasses = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const TDshade1 = [
        '12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-8','13-9','13-13','13-17',
        '14-9','14-13','14-17',
        '15-9','15-10','15-11','15-12','15-13','15-14','15-15','15-16','15-17',
    ]
    const TDshade2 = [
        '13-10','13-11','13-12',
        '14-10','14-11','14-12',
    ]
    const TDshade3 = [
        '13-14','13-15','13-16',
        '14-14','14-15','14-16',
    ]

    return(
    <>
    {f.includes('3dglasses') && (
        <>
            {TDshade1.includes(`${i}-${k}`) && <PixelBlock color="white" />}
            {TDshade2.includes(`${i}-${k}`) && <PixelBlock color="#4589ff" />}
            {TDshade3.includes(`${i}-${k}`) && <PixelBlock color="#f73228" />}
        </>
        )}
    </>
    )
}

export default Mix3DGlasses;