import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import { BackgroundColorsSideEditProps } from '../LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, GradientName, gradients, textColors } from '../colors'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface HeroUnitProps {
  bg?: { color: string; className: string }
  size?: 'medium' | 'large'
  textGradient?: GradientName
}

const HeroUnit: types.Brick<HeroUnitProps> = ({
  bg = bgColors.white.value,
  textGradient = 'none',
  size = 'large',
}: HeroUnitProps) => {
  const titleColor = textColors.gray800
  const textColor = textColors.gray700
  const highlightColor = textColors.purple500
  const titleStyle =
    textGradient !== 'none' ? { WebkitTextFillColor: 'transparent' } : {}

  return (
    <Section bg={bg}>
      <Container size="lg" className="py-12 xl:py-20">
        <div className="max-w-xl mx-auto px-5">
          <Repeater
            propName="badge"
            renderWrapper={(items) => <div className="mb-4">{items}</div>}
          />

          <div
            className={classNames(
              titleColor,
              gradients[textGradient],
              'text-3xl',
              { 'sm:text-5xl': size === 'large' },
              { 'sm:text-4xl': size === 'medium' }
            )}
            style={titleStyle}
          >
            <RichText
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    'text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r',
                    titleColor
                  )}
                  style={{ lineHeight: 1.1 }}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              placeholder="Type a title..."
              propName="title"
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={(props) => (
                <span className={highlightColor} {...props.attributes}>
                  {props.children}
                </span>
              )}
            />
          </div>

          <RichText
            renderBlock={(props) => (
              <p
                className={classNames(
                  'text-lg sm:text-xl text-center leading-7 sm:leading-8',
                  textColor
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Type a text..."
            propName="text"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Link,
            ]}
          />
          <Repeater
            propName="buttons"
            renderWrapper={(items) => (
              <div className="flex justify-center items-center flex-col sm:flex-row mt-6">
                {items}
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

HeroUnit.schema = {
  name: blockNames.HeroUnit,
  label: 'Hero',
  category: 'rb-ui website',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    size: 'large',
    textGradient: 'none',
    title: 'Tworzymy piękne aplikacje internetowe',
    text: 'Jesteśmy zaawansowaną technologicznie firmą zajmującą się tworzeniem stron internetowych, której celem jest dostarczanie doskonałych produktów na czas. Uwielbiamy rozumieć potrzeby naszych klientów i przekraczać ich oczekiwania.',
    badge: [
      {
        text: 'Zaawansowany technologicznie',
        color: {
          color: '#90cdf4',
          className: 'text-blue-400 dark:text-blue-300',
        },
      },
    ],
    buttons: [
      {
        text: 'Zaczynamy',
        href: '',
        isTargetBlank: false,
        variant: 'sky',
        type: 'solid',
      },
      {
        text: 'Dowiedz się więcej',
        href: '',
        isTargetBlank: false,
        variant: 'sky',
        type: 'outline',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Odznaka',
      min: 0,
      max: 1,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Przycisk',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Układ',
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps],
    },
    {
      groupName: 'Tytuł',
      defaultOpen: true,
      props: [
        {
          name: 'textGradient',
          label: 'Gradient na Tekście',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'Brak' },
              { value: 'ocean', label: 'Oceaniczny' },
              { value: 'violet', label: 'Fioletowy' },
              { value: 'sun', label: 'Zachód słońca' },
            ],
          },
        },
        {
          name: 'size',
          label: 'Wielkość tytułu',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'medium', label: 'Średnia' },
              { value: 'large', label: 'Duża' },
            ],
          },
        },
      ],
    },
  ],
}

export default HeroUnit
