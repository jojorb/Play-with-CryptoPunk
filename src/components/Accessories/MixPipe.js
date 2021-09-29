import { PixelBlock } from '../Styled.js';

const MixPipe = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const PipeGrid = [
        '19-15',
        '20-14','20-16','20-19','20-20','20-21','20-22','20-23',
        '21-15','21-17','21-19','21-23',
        '22-16','22-18','22-19','22-23',
        '23-17','23-22',
        '24-18','24-19','24-20','24-21'
    ];
    const woodShade1 = [
        '20-15',
        '21-16','21-20','21-21','21-22',
        '22-17','22-21',
        '23-18','23-19','23-20'
    ]
    const woodShade2 = [
        '22-20','22-22',
        '23-21'
    ]
    const smoke = [
        '18-21',
        '16-21',
        '14-20','14-21','14-22',
        '13-20','13-21','13-22',
        '12-21'
    ]
    return(
    <>
        {f.includes('pipe') && (
            <>
                {PipeGrid.includes(`${i}-${k}`) && <PixelBlock color={"black"} />}
                {woodShade1.includes(`${i}-${k}`) && <PixelBlock color={"#835101"} />}
                {woodShade2.includes(`${i}-${k}`) && <PixelBlock color={"#663a00"} />}
                {smoke.includes(`${i}-${k}`) && <PixelBlock color={"rgba(122, 92, 127, 0.52)"} />}
            </>
        )}
    </>
    )
}

export default MixPipe;