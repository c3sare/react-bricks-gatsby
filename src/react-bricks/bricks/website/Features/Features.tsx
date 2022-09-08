import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { layoutType } from './FeatureItem'
import { BackgroundColorsSideEditProps } from '../LayoutSideProps'

export interface FeaturesProps {
  bg?: { color: string; className: string }
  screenLayout: layoutType
}
const getRepeaterWidht = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'w-full max-w-3xl'
    case 'small':
      return 'w-full max-w-2xl'
    case 'small-3cols':
      return 'md:w-full max-w-5xl md:-mx-8'
  }
}

const Features: types.Brick<FeaturesProps> = ({
  bg = bgColors.white.value,
  screenLayout = 'base',
}) => {
  return (
    <Section bg={bg}>
      <Container
        size={'lg'}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="feature-item"
          renderWrapper={(items) => (
            <div
              className={classNames(
                'flex flex-wrap justify-between mx-auto px-6 md:px-0',
                getRepeaterWidht(screenLayout)
              )}
            >
              {screenLayout === 'small-3cols' ? (
                <div className="grid md:grid-cols-3">{items}</div>
              ) : (
                items
              )}
            </div>
          )}
          itemProps={{ screenLayout: screenLayout }}
        />
      </Container>
    </Section>
  )
}
Features.schema = {
  name: blockNames.Features,
  label: 'Nowości',
  category: 'rb-ui website',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    screenLayout: 'base',
    'feature-item': [
      {
        title: 'Rozwój front-endu',
        text: 'Specjalizujemy się w tworzeniu aplikacji internetowych React. W przypadku stron publicznych używamy Next.js lub Gatbsy, w zależności od typu projektu.',
        screenLayout: 'base',
        image: {
          src: 'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
      {
        title: 'Rozwój front-endu',
        text: 'Specjalizujemy się w tworzeniu aplikacji internetowych React. W przypadku stron publicznych używamy Next.js lub Gatbsy, w zależności od typu projektu.',
        screenLayout: 'base',
        image: {
          src: 'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
      {
        title: 'Rozwój front-endu',
        text: 'Specjalizujemy się w tworzeniu aplikacji internetowych React. W przypadku stron publicznych używamy Next.js lub Gatbsy, w zależności od typu projektu.',
        screenLayout: 'base',
        image: {
          src: 'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'feature-item',
      itemType: blockNames.FeatureItem,
      itemLabel: 'Nowość',
      min: 0,
      max: 4,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Układ',
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps],
    },
    {
      groupName: 'Kolumny',
      defaultOpen: true,
      props: [
        {
          name: 'screenLayout',
          label: 'Wygląd kontenera',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'base', label: 'Dwie kolumny' },
              { value: 'small', label: 'Dwie małe kolumny' },
              { value: 'small-3cols', label: 'Trzy kolumny' },
            ],
          },
        },
      ],
    },
  ],
}
export default Features
