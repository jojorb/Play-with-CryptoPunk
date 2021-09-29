import { PixelBlock } from '../Styled.js';

const MixNerdGlasses = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const NerdShades = [
        '12-8','12-9','12-10','12-11','12-12','','12-14','12-15','12-16','12-17',
        '13-9','13-12','13-13',
        '14-9','14-12',
        '15-10','15-11',
        '13-14','13-17',
        '14-14','14-17',
        '15-15','15-16' 
    ];
    const NerdShades1 = [
        '13-10','13-11','13-15','13-16',
        '14-10','14-11','14-15','14-16'
    ]

    return(
    <>
    {f.includes('nerdShades') && (
        <>
            {NerdShades.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {NerdShades1.includes(`${i}-${k}`) && <PixelBlock color="#89dcdb" />}
        </>
        )}
    </>
    )
}

export default MixNerdGlasses;