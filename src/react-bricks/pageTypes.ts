import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'en',
    getDefaultContent: () => [],
    categories: [
      {
        category: 'kat1',
      },
      {
        category: 'kat2',
      },
    ],
  },
]

export default pageTypes