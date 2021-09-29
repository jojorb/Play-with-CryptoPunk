import { PixelBlock } from './Styled.js';

const WomanFace = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const womanFace = ['24-9','23-9','22-9','21-9','20-9','19-8','18-8','17-8','16-8','15-8','15-7','14-7','13-7','9-9','8-10','8-11','8-12','8-13','8-14','8-15','9-16','10-8','11-8','12-8','10-17','11-17','12-17','13-17','14-17','15-17','16-17','17-17','18-17','19-17','20-16', '21-15','22-14','22-13','22-12','21-11','23-13','24-13']


    return(
    <>
    {f.includes('woman') && (
        <>
            {womanFace.includes(`${i}-${k}`) && <PixelBlock color="black" />}
        </>
        )}
    </>
    )
}

export default WomanFace;