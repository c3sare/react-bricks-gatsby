import React from 'react'

import { Preview } from 'react-bricks/frontend'
import Layout from '../components/layout'

const PagePreview: React.FC = () => {
  return (
    <Layout>
      <Preview />
    </Layout>
  )
}

export const Head = () => {
  return <title>Preview</title>
}

export default PagePreview
