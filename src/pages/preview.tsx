import React from 'react'

import { Preview } from 'react-bricks/frontend'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const PagePreview: React.FC = () => {
  return (
    <Layout>
      <Helmet title="Preview" />
      <Preview />
    </Layout>
  )
}

export default PagePreview
