require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const bluebird = require('bluebird')
const fetchPages = require('react-bricks/frontend').fetchPages
const fetchPage = require('react-bricks/frontend').fetchPage

exports.createPages = async ({ actions: { createPage } }) => {
  const appId = process.env.GATSBY_APP_ID
  const apiKey = process.env.API_KEY

  if (!appId || !apiKey) {
    console.error(
      'App credentials not found. Please, set your GATSBY_APP_ID and API_KEY in your .env.development or .env.production file.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page: null, error: 'NOKEYS' },
    })
    return
  }

  const allPages = await fetchPages(apiKey)

  if (!allPages || allPages.length === 0) {
    console.error(
      'No published page was found. Please, create at least one page from the /admin interface.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page: null, error: 'NOPAGE' },
    })
    return
  }

  const allPagesWithContent = await bluebird.map(
    allPages,
    (page) => {
      return fetchPage(page.slug, apiKey)
    },
    { concurrency: 2 }
  )

  const menuElements = [...allPages.map(item => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    tags: item.tags,
    meta: item.meta,
  }))]

  // Home Page
  const homePage = allPagesWithContent.find((page) => page.slug === 'home')
  if (homePage) {
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page: homePage, pages: menuElements },
    })
  }

  // Other pages
  allPagesWithContent
    .filter((page) => page.slug !== 'home')
    .forEach((page) => {
      createPage({
        path: `/${page.slug}/`,
        component: require.resolve('./src/templates/page.tsx'),
        context: { page, pages: menuElements },
      })
    })

  createPage({
    path: `/preview/`,
    component: require.resolve('./src/templates/preview.tsx'),
    context: { pages: menuElements },
  })

  createPage({
    path: `/404`,
    component: require.resolve('./src/templates/404.tsx'),
    context: { pages: menuElements },
  })
}
