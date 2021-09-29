import { PixelBlock } from '../Styled.js';

const MixRosyCheeks = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const RosyCheeks= [
        '16-10','16-11','16-15','16-16'
    ];

    return(
    <>
    {f.includes('rosyCheeks') && (
        <>
            {RosyCheeks.includes(`${i}-${k}`) && <PixelBlock color="#a97d51" />}
        </>
        )}
    </>
    )
}

export default MixRosyCheeks;