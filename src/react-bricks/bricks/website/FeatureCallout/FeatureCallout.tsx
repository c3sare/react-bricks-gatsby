import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { bgColors, textColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import blockNames from '../blockNames'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from '../LayoutSideProps'

export interface FeatureCalloutProps {
  bg?: { color: string; className: string }
  width?: Size
}

const FeatureCallout: types.Brick<FeatureCalloutProps> = ({
  bg = bgColors.white.value,
  width = 'sm',
}) => {
  return (
    <Section bg={bg}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="sm:mr-10 mb-4 sm:mb-0 w-32">
          <Image propName="imageSource" alt="image" />
        </div>
        <div className="flex-1">
          <Text
            propName="title"
            renderBlock={(props) => (
              <div
                className={classNames(
                  'font-extrabold text-xl leading-6 mb-1',
                  textColors.gray900
                )}
                {...props.attributes}
              >
                {props.children}
              </div>
            )}
            placeholder="Tytuł"
          />
          <RichText
            propName="text"
            renderBlock={(props) => (
              <span
                className={classNames('leading-6', textColors.gray700)}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Tekst"
            allowedFeatures={[types.RichTextFeatures.Link]}
          />
        </div>
      </Container>
    </Section>
  )
}

FeatureCallout.schema = {
  name: blockNames.FeatureCallout,
  label: 'Objaśnienie funkcji',
  category: 'rb-ui website',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
    title: 'Prosty jak Wix, ale własny.',
    text: 'Świetne doświadczenie dla użytkownika, komponenty React do budowy.',
    imageSource: {
      src: 'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      srcSet: '',
      alt: 'Twórcy treści',
      seoName: 'content-creators',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Układ',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default FeatureCallout
