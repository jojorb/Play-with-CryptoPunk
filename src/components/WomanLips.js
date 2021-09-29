import { PixelBlock } from './Styled.js';

const WomanLips = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const lipsGrid = ['19-12', '19-13', '19-14'];
    const lipstick = '#5c1800';
    const hotLipstick = '#c01f00';
    const purpleLipstick = '#cb00ce'

    return(
    <>
        {f.includes('hotLipstick') && (
            lipsGrid.includes(`${i}-${k}`) && <PixelBlock color={hotLipstick} />
         )}
        {f.includes('purpleLipstick') && (
            lipsGrid.includes(`${i}-${k}`) && <PixelBlock color={purpleLipstick} />
         )}
        {f.includes('lipstick') ? (
            lipsGrid.includes(`${i}-${k}`) && <PixelBlock color={lipstick} />
          ) : (
            lipsGrid.includes(`${i}-${k}`) && <PixelBlock color={'black'} />
        )} 
    </>
    )
}

export default WomanLips;