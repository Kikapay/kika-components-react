import React from 'react'

import { Checkbox, InfoBox } from '@kikapay/kika-components-react'
import '@kikapay/kika-components-react/dist/index.css'

// Mock data
import { infoBoxData } from './mockData/infoBox'

const App = () => {
  return <div> 
    <h1>KikaComponents</h1>

    <h2>Checkbox</h2>
    <Checkbox />

    <h2>Info Box</h2>
    <InfoBox 
      infoBoxDetails={infoBoxData}
      merchantColor="#123321"
    />
  </div>
}

export default App
