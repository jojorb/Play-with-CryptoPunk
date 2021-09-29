import { PixelBlock } from '../Styled.js';

const MixEyePatch = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const EyePatchGrid= [
        '12-8','12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-9','13-10','13-11','13-12',
        '14-9','14-10','14-11','14-12',
        '15-10','15-11'
    ];

    return(
    <>
    {f.includes('eyepatch') && (
        <>
            {EyePatchGrid.includes(`${i}-${k}`) && <PixelBlock color="black" />}
        </>
        )}
    </>
    )
}

export default MixEyePatch;