import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section from '../layout/Section'

export interface FaqProps {
  bg?: { color: string; className: string }
  width?: Size
}

const Faq: types.Brick<FaqProps> = ({
  bg = bgColors.white.value,
  width = 'sm',
}) => {
  return (
    <Section bg={bg}>
      <Container size={width} className={classNames('pt-12')}>
        <Repeater propName="faqs" />
      </Container>
    </Section>
  )
}

Faq.schema = {
  name: blockNames.Faqs,
  label: 'Pytania i odpowiedzi',
  category: 'rb-ui website',

  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'full',
    borderBottom: 'none',
    width: 'sm',
    faqs: [
      {
        question: 'Dlaczego powinieneś zmienić swój CMS?',
        answer: 'Ponieważ oczekujesz jak najlepszych wrażeń i funkcjonalności.',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'faqs',
      itemType: blockNames.Faq,
      itemLabel: 'Pytanie',
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

export default Faq
