import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const videoUrlPrefix: { [key: string]: string } = Object.freeze({
  youtube: 'https://www.youtube.com/embed/',
  vimeo: 'https://player.vimeo.com/video/',
})

export interface VideoProps {
  url: string
  platform: string
}

const Video: types.Brick<VideoProps> = ({ platform, url }) => {
  return (
    <Section>
      <Container>
        <div className="aspect-video">
          <iframe
            key="video iframe"
            width="100%"
            height="100%"
            src={`${videoUrlPrefix[platform]}${url}?rel=0`}
          />
        </div>
      </Container>
    </Section>
  )
}
Video.schema = {
  name: blockNames.Video,
  label: 'Wideo',
  category: 'rb-ui blog',
  getDefaultProps: () => ({
    url: 'A60xWr-nqv0',
    platform: 'youtube',
  }),
  sideEditProps: [
    {
      name: 'platform',
      label: 'Platforma',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'youtube', label: 'YouTube' },
          { value: 'vimeo', label: 'Vimeo' },
        ],
      },
    },
    {
      name: 'url',
      label: 'Identyfikator wideo (t.j. "A60xWr-nqv0")',
      type: types.SideEditPropType.Text,
    },
  ],
}
export default Video
