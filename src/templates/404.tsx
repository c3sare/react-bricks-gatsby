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
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist.</p>
  </Layout>
)

export const Head = () => {
  return <title>404: Not found</title>
}

export default NotFoundPage
