import React from 'react'
import { navbar } from '../../../Data/Data'

const style = {
  display: 'inline-block',
  // marginLeft: '30px',
  fontSize: '20px',
  lineHeight: '18px',
  fontWeight: '100'

}

export default function Nav_bottom() {
  return (
    <div>
      <ul style={{
        display: 'flex', justifyContent: 'space-around',
        height: '60px',
        padding: '20px', background: '#F7F7F7'
      }}>
        {navbar.map((item, index) =>
          <li style={style} key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}
