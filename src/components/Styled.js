import styled from '@emotion/styled'


export const CenterPunk = styled.div`
    align-items: center;
    display : flex;
    justify-content: center;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: #000000;
`

export const PunkDiv = styled.div({},
  props => ({ background: props.background })
  )

export const PixelBlock = styled.div({
    height: '100%',
    // overflow: "hidden",
    // filter: 'hue-rotate(1deg)',
  },
  props => ({ 
    color: props.color, 
    backgroundColor: props.color,
    // boxShadow: `0px 0px 5px ${props.color}, 0 0 25px ${props.color}, 0 0 30px ${props.color}`,
  })
  );
  
  export const PixelBlockGlow = styled.div({
      height: '100%',
      // overflow: "hidden",
      // filter: 'hue-rotate(1deg)',
      // color: "";
    },
    props => ({ 
      color: props.color, 
      // border: 'solid 3px transparent',
      backgroundColor: props.color,
      // boxShadow: `-5px 0px 5px ${props.color}, 0 0 25px ${props.color}, 0 0 30px ${props.color}, 0 0 200px ${props.color}`,
    })
    );