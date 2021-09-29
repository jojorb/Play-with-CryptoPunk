import { PixelBlock } from '../Styled.js';

const MixRegularShades = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const RegularShades= [
        '12-7','12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-9','13-10','13-11','13-12', '13-14', '13-15', '13-16', '13-17',
        '14-10','14-11','14-15','14-16',
    ];

    return(
    <>
    {f.includes('regularShades') && (
        <>
            {RegularShades.includes(`${i}-${k}`) && <PixelBlock color="black" />}
        </>
        )}
    </>
    )
}

export default MixRegularShades;