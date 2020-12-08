import React from 'react'

import {
  Checkbox,
  InfoBox,
  Heading,
  SubHeading,
  SectionHeading,
  Paragraph,
  Hyperlink,
  BankListHeader,
  BankList,
  BankListFooter,
  KikaLoader,
} from '@kikapay/kika-components-react'
import '@kikapay/kika-components-react/dist/index.css'

// Mock data
import { infoBoxData } from './mockData/infoBox'
import { bankListHeaderData, bankListData, bankListFooter } from './mockData/bankList'

const App = () => {
  return <div style={{ align: "middle" }}> 
    <div style={{ backgroundColor: "#0076FF" }}>
      <img src="https://cdn.kikapay.com/merchants/kikapay.png" alt=""></img>
    </div>

    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h2>Checkbox</h2>
    </div>
    <Checkbox />

    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h2>Info Box</h2>
    </div>
    <InfoBox 
      infoBoxDetails={infoBoxData}
      merchantColor="#0076FF"
    />

    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h2>Typography</h2>
    </div>
    <div style={{ backgroundColor: "#0076FF" }}>
      <Heading>Heading</Heading>
      <SubHeading>Sub Heading</SubHeading>
    </div>
    <SectionHeading>Section Heading</SectionHeading>
    <Paragraph>Paragraph</Paragraph>
    <br />
    <Hyperlink url="https://www.google.com">Google</Hyperlink>

    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h2>Bank List</h2>
    </div>
    <BankListHeader 
      backgroundColor={bankListHeaderData.backgroundColor}
      merchantLogo={bankListHeaderData.merchantLogo}
      heading={bankListHeaderData.heading}
      subHeading={bankListHeaderData.subHeading}
      infoBoxDetails={bankListHeaderData.infoBoxDetails}
    />
    <BankList
      list={bankListData.list}
      bankNotListedLink={bankListData.bankNotListedLink}
    />
    <BankListFooter
      consentText={bankListFooter.consentText}
    />

    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h2>KikaLoader</h2>
    </div>
    <KikaLoader />
  </div>
}

export default App
