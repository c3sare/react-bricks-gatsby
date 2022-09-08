import React from 'react'

import Layout from '../components/layout'

const NotFoundPage: React.FC = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist.</p>
  </Layout>
)

export const Head = () => {
  return <title>404: Not found</title>
}

export default NotFoundPage
