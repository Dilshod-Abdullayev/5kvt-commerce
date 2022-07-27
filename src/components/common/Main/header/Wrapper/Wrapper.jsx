import React from 'react'
import Wrapper__left from "./Wrapper_left";
import Wrapper__right from "./Wrapper__right";
const style={
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '40px'
}
export default function Wrapper() {
    return (
        <div style={style} >
          <Wrapper__left/>
            <Wrapper__right/>
        </div>
    )
}
