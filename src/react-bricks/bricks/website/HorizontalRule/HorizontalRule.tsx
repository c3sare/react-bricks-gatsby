import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container, { Size } from '../layout/Container'
import Section from '../layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from '../LayoutSideProps'

interface HorizontalRuleProps {
  width?: Size
  bg?: { color: string; className: string }
}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({ width, bg }) => {
  return (
    <Section bg={bg} className="py-4">
      <Container size={width}>
        <hr />
      </Container>
    </Section>
  )
}

HorizontalRule.schema = {
  name: blockNames.HorizontalRule,
  label: 'Linia pozioma',
  category: 'rb-ui website',
  sideEditProps: [
    {
      groupName: 'Układ',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default HorizontalRule
