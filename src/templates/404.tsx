import React from 'react'

import Layout from '../components/layout'
import { Pagex } from './page'

interface PagePrevInter {
  pageContext: {
    pages: Pagex[]
  }
}

const NotFoundPage: React.FC<PagePrevInter> = ({pageContext: {pages}}) => (
  <Layout pages={pages}>
    <div style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Nie znaleziono</h1>
      <p>Taka strona nie istnieje</p>
    </div>
  </Layout>
)

export const Head = () => {
  return <title>404: Nie znaleziono</title>
}

export default NotFoundPage
