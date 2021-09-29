import { PixelBlock, PixelBlockGlow } from '../Styled.js';

const MixBigShades = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const BodyBigShades= [
        '12-8','12-9','12-10','12-11','12-12', '12-14','12-15','12-16','12-17','12-18',
        '13-8','13-12','13-13','13-14','13-18',
        '14-8','14-12','14-14','14-18',
        '15-8','15-12','15-14','15-18',
        '16-8','16-9','16-9','16-10','16-11',
        '16-15','16-16','16-17',
    ];
    const BigShadesShade1 = ['13-9','13-10','13-11','13-15','13-16','13-17']
    const BigShadesShade2 = ['14-9','14-10','14-11','14-15','14-16','14-17']
    const BigShadesShade3 = ['15-9','15-10','15-11','15-15','15-16','15-17']

    return(
    <>
    {f.includes('BigShades') && (
        <>
            {BodyBigShades.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {BigShadesShade1.includes(`${i}-${k}`) && <PixelBlockGlow color="#670144" />}
            {BigShadesShade2.includes(`${i}-${k}`) && <PixelBlockGlow color="#8a005b" />}
            {BigShadesShade3.includes(`${i}-${k}`) && <PixelBlockGlow color="#aa1960" />}
        </>
        )}
    </>
    )
}

export default MixBigShades;