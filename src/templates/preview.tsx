import React from 'react'

import { Preview } from 'react-bricks/frontend'
import Layout from '../components/layout'
import { Pagex } from './page'

interface PagePrevInter {
  pageContext: {
    pages: Pagex[]
  }
}

const PagePreview: React.FC<PagePrevInter> = ({pageContext: {pages}}) => {
  return (
    <Layout pages={pages}>
      <Preview />
    </Layout>
  )
}

export const Head = () => {
  return <title>Preview</title>
}

export default PagePreview
