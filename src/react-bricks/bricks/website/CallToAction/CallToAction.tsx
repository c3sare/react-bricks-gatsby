import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface CallToActionProps {
  bg?: { color: string; className: string }
  width?: Size
}

const CallToAction: types.Brick<CallToActionProps> = ({
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
        <div className="flex-1 sm:pr-12 mb-4 sm:mb-0">
          <RichText
            propName="text"
            renderBlock={(props) => (
              <span
                className={classNames(
                  'font-extrabold text-xl sm:text-2xl leading-6 sm:leading-8',
                  textColors.gray800
                )}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Tekst do działania"
          />
        </div>
        <div>
          <Repeater propName="buttons" itemProps={{ padding: 'small' }} />
        </div>
      </Container>
    </Section>
  )
}

CallToAction.schema = {
  name: blockNames.CallToAction,
  label: 'Motwacja do działania',
  category: 'rb-ui website',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
    text: 'React Bricks jest świetny dla marketingu i deweloperów.',
    buttons: [
      {
        text: 'Zaczynamy',
        variant: 'pink',
        type: 'solid',
        href: '',
        isTargetBlank: false,
        isBigButton: false,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Przycisk',
      min: 0,
      max: 1,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Układ',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default CallToAction
