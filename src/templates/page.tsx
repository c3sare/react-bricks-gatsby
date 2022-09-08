import React, { useContext } from 'react'
import {
  PageViewer,
  cleanPage,
  ReactBricksContext,
  types,
} from 'react-bricks/frontend'
import Layout from '../components/layout'
import ErrorNoKeys from '../components/errorNoKeys'
import ErrorNoHomePage from '../components/errorNoHomePage'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    error: string
    allPages: types.Page[]
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: { page, error, allPages },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return (
    <Layout allPages={allPages}>
      {pageOk && <PageViewer page={pageOk} />}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </Layout>
  )
}

export const Head: React.FC<ReactBricksPageProps> = ({
  pageContext: { page },
}) => {
  return (
    <>
      <title>{page.name}</title>
      <meta name="description" content={page.meta.description} />
      {/* <meta name="keywords" content={page.data?.keywords || ""} /> */}
    </>
  )
}

export default Page
