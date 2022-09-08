import * as React from 'react'
import { Image, types, Text, RichText } from 'react-bricks/frontend'
import classNames from 'classnames'
import blockNames from '../blockNames'

export type layoutType = 'base' | 'small' | 'small-3cols'

const getFontSize = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'text-lg md:text-xl md:leading-5 leading-5 text-gray-700 dark:text-gray-300 font-extrabold mb-2'
    default:
      return ' text-base leading-5 text-gray-700 dark:text-gray-400 font-extrabold mb-2'
  }
}

export interface FeatureItemProps {
  screenLayout: layoutType
  isTextCenter: boolean
}

const screen = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'md:w-80'
    case 'small':
      return 'md:w-72 md:-mx-2'
    case 'small-3cols':
      return 'md:px-8'
    default:
      return 'w-64'
  }
}
const FeatureItem: types.Brick<FeatureItemProps> = ({
  screenLayout,
  isTextCenter = false,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        `flex md:flex-col ${screen(screenLayout)} mb-16`,
        isTextCenter && 'text-center items-center'
      )}
      {...rest}
    >
      <Image
        propName="image"
        alt="feature"
        imageClassName={
          screenLayout === 'base'
            ? 'w-24 md:w-auto h-auto md:h-24'
            : 'w-12 md:w-auto h-auto md:h-12'
        }
        renderWrapper={({ children }) => {
          return <div className="my-auto mr-6 md:mr-0 md:mb-5">{children}</div>
        }}
      />

      <div className="flex-1">
        <Text
          propName="title"
          placeholder="tytuł..."
          renderBlock={(props) => (
            <h3 className={classNames(getFontSize(screenLayout))}>
              {props.children}
            </h3>
          )}
        />
        <RichText
          propName="text"
          placeholder="tytuł..."
          renderBlock={(props) => (
            <p className="text-gray-500 dark:text-gray-200 font-normal leading-6 text-base text">
              {props.children}
            </p>
          )}
        />
      </div>
    </div>
  )
}
FeatureItem.schema = {
  name: blockNames.FeatureItem,
  label: 'Nowość',
  category: 'rb-ui website',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    isTextCenter: false,
    title: 'Rozwój front-endu',
    text: 'Specjalizujemy się w tworzeniu aplikacji internetowych React. W przypadku stron publicznych używamy Next.js lub Gatbsy, w zależności od typu projektu.',
    screenLayout: 'base',
    image: {
      src: 'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      srcSet: '',
    },
  }),
  sideEditProps: [
    {
      name: 'isTextCenter',
      label: 'Wyśrodkowane',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default FeatureItem
