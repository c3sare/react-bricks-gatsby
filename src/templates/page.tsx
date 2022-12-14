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

export interface Pagex {
  id: number
  slug: string
  name: string
}

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    error: string
    pages: Pagex[]
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: { page, error, pages },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return (
    <Layout pages={pages}>
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
      <meta name="keywords" content={page.tags.join(" ")}/>
      <meta name="title" content={page.meta.title}/>
      <meta name="language" content={page.meta.language}/>
      <meta name="og:image" content={page.meta.featuredImage}/>
    </>
  )
}

export default Page
