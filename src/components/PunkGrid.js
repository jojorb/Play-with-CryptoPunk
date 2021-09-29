import { useState } from "react";
import { PunkDiv } from "./Styled";
import WomanLips from "./WomanLips";
import MixNose from "./MixNose";
import MixMohawk from "./Haircut/MixMohawk";
import WomanFace from "./WomanFace";
import MixFaceShade from "./MixFaceShade";
import MixSkin from "./MixSkin";
import MixCigarette from "./Accessories/MixCigarette";
import MixRosyCheeks from "./Makeups/MixRosyCheeks";
import MixVR from "./EyesWear/MixVR";
import MixBigShades from "./EyesWear/MixBigShades";
import Mix3DGlasses from "./EyesWear/Mix3DGlasses";
import MixEarRing from "./Accessories/MixEarRing";
import EyesShadow from "./Makeups/MixEyesShadow";
import MixChain from "./Accessories/MixChain";
import MixClownEyes from "./Makeups/MixClownEyes";
import MixEyeMask from "./EyesWear/MixEyeMask";
import MixRegularShades from "./EyesWear/MixRegularShades";
import MixHornedRimGlasses from "./EyesWear/MixHornedRimGlasses";
import MixEyePatch from "./EyesWear/MixEyePatch";
import MixClassicShades from "./EyesWear/MixClassicshades";
import MixNerdGlasses from "./EyesWear/MixNerdGlasses";
import MixMole from "./Makeups/MixMole";
import MixSpots from "./Makeups/MixSpots";
import MixPipe from "./Accessories/MixPipe";
import MixHeadBand from "./HeadWear/HeadBand";
import MedicalMask from "./HeadWear/MedicalMask";
import WeldingGoogle from "./EyesWear/WeldingGoogle";

const canvas = 24;
const pixel = 14; //canvas/1.7142;
const numRows = canvas;
const numCols = canvas+1;

const PunkGrid = (props) => {
  // console.log(features)

  const f = props.features;
  // console.log(f)
  // console.log("cryptopunk ID:")
    
    // eslint-disable-next-line no-unused-vars
    const [grid, setGrid] = useState(() => {
        const rows = []
        for (let i = -1; i < numRows; i++) {
          rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows;
      })


    return (
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, ${pixel}px)`}}>
            {grid.map((rows, i) => 
              rows.map((col,k) => 
              <PunkDiv key={`${i}-${k}`} style={{width: pixel, height: pixel}} background="pink" >

                {/* TOP LAYER */}
                <WeldingGoogle i={i} k={k} f={f} />
                <MixMohawk i={i} k={k} f={f} />
                <MixBigShades i={i} k={k} f={f} />
                <MixVR i={i} k={k} f={f} />
                <Mix3DGlasses i={i} k={k} f={f} />
                <MixEyeMask i={i} k={k} f={f} />
                <MixRegularShades i={i} k={k} f={f} />
                <MixClassicShades i={i} k={k} f={f} />
                <MixNerdGlasses i={i} k={k} f={f} />
                <MixEyePatch i={i} k={k} f={f} />
                <MixEarRing i={i} k={k} f={f} />
                <MixCigarette i={i} k={k} f={f} />
                <MixPipe i={i} k={k} f={f} />
                <MixHornedRimGlasses i={i} k={k} f={f} />
                <MixHeadBand i={i} k={k} f={f} />
                <MedicalMask i={i} k={k} f={f} />


                <WomanFace i={i} k={k} f={f} />

                {/* MID LAYER */}
                <MixClownEyes  i={i} k={k} f={f} />
                <EyesShadow  i={i} k={k} f={f} />
                <MixNose i={i} k={k} f={f} />
                <WomanLips i={i} k={k} f={f} />
                <MixChain i={i} k={k} f={f} />

                {/* LOWER LAYER */}
                <MixFaceShade i={i} k={k} f={f}  />
                <MixMole i={i} k={k} f={f}  />
                <MixSpots i={i} k={k} f={f}  />
                <MixRosyCheeks i={i} k={k} f={f}  />
                <MixSkin i={i} k={k} f={f} />
                
                
                </PunkDiv>
                )
            )}
        </div>
    )
}

export default PunkGrid;