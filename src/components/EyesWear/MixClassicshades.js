import { PixelBlock } from '../Styled.js';

const MixClassicShades = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const ClassicShades = [
        '12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-9','13-12',
        '14-9','14-12',
        '15-10','15-11',
        '13-14','13-17',
        '14-14','14-17',
        '15-15','15-16' 
    ];
    const ClassicShades2 = [
        '13-10','13-11','13-15','13-16'
    ]
    const ClassicShades3 = [
        '14-10','14-11','14-15','14-16'
    ]

    return(
    <>
    {f.includes('classicShades') && (
        <>
            {ClassicShades.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {ClassicShades2.includes(`${i}-${k}`) && <PixelBlock color="#5a3701" />}
            {ClassicShades3.includes(`${i}-${k}`) && <PixelBlock color="#c47800" />}
        </>
        )}
    </>
    )
}

export default MixClassicShades;