import React from 'react'
import { Header } from '../components'
const AppLayout = ({ children }) => (
  <>
    <Header />
    <div className="contentWrapper">
      <main className="content">{children}</main>
      {/*<Footer />*/}
    </div>
  </>
)

export default AppLayout
