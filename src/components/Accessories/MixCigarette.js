import { PixelBlock } from '../Styled.js';

const MixCigarette = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const Cigshade1 = [
        '19-15','19-16','19-17','19-18','19-19',
    ]
    const Cigshade2 = [
        '18-15','18-16','18-17','18-18','18-19','18-20',
        '20-15','20-16','20-17','20-18','20-19','20-20',
        '19-21','19-14'
    ]
    const Cigshade3 = [
        '19-20'
    ]
    const Cigshade4 = [
        '15-20','14-20','13-20','12-20',
        '11-20','10-20',
    ]

    const Vapshade1 = [
        '18-15','18-16','18-17','18-18','18-19','18-20','18-21',
        '20-15','20-16','20-17','20-18','20-19','20-20','20-21',
        '19-21','19-14'
    ]
    const Vapshade2 = [
        '19-15','19-16','19-17','19-18','19-19',
    ]
    const Vapshade3 = [
        '19-20'
    ]
    return(
    <>
        {f.includes('cigarette') && (
            <>
                {Cigshade1.includes(`${i}-${k}`) && <PixelBlock color="white" />}
                {Cigshade2.includes(`${i}-${k}`) && <PixelBlock color="black" />}
                {Cigshade3.includes(`${i}-${k}`) && <PixelBlock color="#dd5d16" />}
                {Cigshade4.includes(`${i}-${k}`) && <PixelBlock color="rgba(122, 92, 127, 0.52)" />}
            </>
        )}
        {f.includes('vape') && (
            <>
                {Vapshade1.includes(`${i}-${k}`) && <PixelBlock color="black" />}
                {Vapshade2.includes(`${i}-${k}`) && <PixelBlock color="#585858" />}
                {Vapshade3.includes(`${i}-${k}`) && <PixelBlock color="#2d28ff" />}
            </>
        )} 
    </>
    )
}

export default MixCigarette;