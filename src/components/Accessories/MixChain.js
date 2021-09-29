import { PixelBlock } from '../Styled.js';

const MixChain = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const ChainGrid = ['23-10','23-11','23-12'];

    const silver = 'silver';
    const gold = 'gold';

    return(
    <>
        {f.includes('goldenChain') && (
            ChainGrid.includes(`${i}-${k}`) && <PixelBlock color={gold} />
            )}
            {f.includes('silverChain') && (
            ChainGrid.includes(`${i}-${k}`) && <PixelBlock color={silver} />
            )} 
    </>
    )
}

export default MixChain;