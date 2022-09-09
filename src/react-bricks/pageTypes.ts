import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'pl',
    getDefaultContent: () => [],
    categories: [
      {
        category: 'kat1',
      },
      {
        category: 'kat2',
      },
    ],
    customFields: [
      {
        groupName: 'test',
        props: [
          {
            name: '',
            label: '',
            type: types.SideEditPropType.Select,
            selectOptions: {
              options: [{
                value: 1,
                label: 'dasda'
              }],
              display: types.OptionsDisplay.Select
            }
          }
        ]
      }
    ]
  },
  {
    name: 'mainMenu',
    pluralName: 'mainMenus',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'pl',
    getDefaultContent: () => [],
    categories: [],
  },
  {
    name: 'bottomMenu',
    pluralName: 'bottomMenus',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'pl',
    getDefaultContent: () => [],
    categories: [],
  },
  {
    name: 'termPage',
    pluralName: 'termPages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'pl',
    getDefaultContent: () => [],
    categories: [],
  },
]

export default pageTypes
