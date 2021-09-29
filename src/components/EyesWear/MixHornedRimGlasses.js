import { PixelBlock } from '../Styled.js';

const MixHornedRimGlasses = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const RimGlassesBody= [
        '12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-8','13-12','13-13'
    ];
    const RimGlassesShade1= [
        '13-9','14-9','15-9',
        '15-9','15-10','15-11',
        '13-14','14-14','15-14',
        '15-15','15-16'
    ];
    const RimGlassesShade2= [
        '13-10','13-11',
        '14-10','14-11',
        '13-15','13-16',
        '14-15','14-16'
    ];

    return(
    <>
    {f.includes('hornedRimGlasses') && (
        <>
            {RimGlassesBody.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {RimGlassesShade1.includes(`${i}-${k}`) && <PixelBlock color="#d4cab9" />}
            {RimGlassesShade2.includes(`${i}-${k}`) && <PixelBlock color="hsla(0, 0%, 90%, 0.5)" />}
        </>
        )}
    </>
    )
}

export default MixHornedRimGlasses;