import { PixelBlock } from '../Styled.js';

const MedicalMask = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const medicalmask1 = [
        '14-8',
        '15-9','15-16',
        '16-10','16-11','16-12','16-14','16-15',
        '17-10','17-11','17-12','17-13','17-14','17-15',
        '18-11','18-12','18-13','18-14',
        '19-9','19-10','19-11','19-12','19-13','19-14','19-15','19-16',
        '20-10','20-11','20-12','20-13','20-14','20-15',
        '21-11','21-12','21-13','21-14',
    ]
    const medicalmask2 = [
        '16-13',
        '18-10','18-15'
    ]

    return(
    <>
    {f.includes('mediclMask') && (
        <>
            {medicalmask1.includes(`${i}-${k}`) && <PixelBlock color="#cacaca" />}
            {medicalmask2.includes(`${i}-${k}`) && <PixelBlock color="#b2b2b2" />}
        </>
        )}
    </>
    )
}

export default MedicalMask;