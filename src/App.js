import { CenterPunk } from './components/Styled';
import PunkGrid from './components/PunkGrid';

function App() {
  console.group(`choose features:
 - woman/man/ape/alien
 - lipstick/hotLipstick
 - rosyCheeks
 - earring
 - mole/spots
 - cigarette/vape
 - nohawk
 - ClownEyes/EyesShadow
 - clownNose/
 - 3dglasses/BigShades/vr/eyepatch/hornedRimGlasses/eyemask
 - /regularShades/nerdShades/classicShades/weldingGoogle
 - silverChain/goldChain
 - mediclMask/headband
 `);

  return (
    <CenterPunk>
      <PunkGrid
        features={[
          'woman',
          'hotLipstick',
          'nohawk',
          'eyemask',
          'vape',
          'earring',
          // 'weldingGoogle',
          // 'nerdShades',
          // 'mediclMask',
          // 'headband',
          'silverChain',
          'rosyCheeks',
        ]}
      />
    </CenterPunk>
  );
}

export default App;
