import * as React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

import blockNames from '../blockNames'

export interface TeamItemProps {
  twitter?: string
  github?: string
  linkedin?: string
}

const TeamItem: types.Brick<TeamItemProps> = ({
  twitter,
  github,
  linkedin,
  ...rest
}) => {
  return (
    <div className="flex flex-col sm:w-1/3 w-1/2 p-6" {...rest}>
      <Image
        propName="picture"
        alt="team-item"
        // containerClassName="w-12 h-12 lg:w-16 lg:h-16 mx-4 mb-8 bg-white rounded-full p-2 shadow-md flex justify-center items-center"
        // imageClassName="w-6 h-6 lg:w-10 lg:h-10"
        imageClassName="w-24 h-24 rounded-full"
        renderWrapper={({ children }) => (
          <div className="w-24 h-24 mb-6 flex justify-center items-center bg-white rounded-full shadow-xl mx-auto">
            {children}
          </div>
        )}
      />
      <div className="text-center dark:text-gray-200 text-gray-500">
        <Text
          renderBlock={(props) => (
            <div className="text-sm font-bold">{props.children}</div>
          )}
          placeholder="Imię członka..."
          propName="memberName"
        />
        <Text
          renderBlock={(props) => (
            <div className="text-xs">{props.children}</div>
          )}
          placeholder="Rola"
          propName="role"
        />
      </div>

      {(twitter || linkedin || github) && (
        <div className="flex flex-row justify-center space-x-2 mt-2 dark:text-sky-300 text-sky-400 ">
          {twitter && (
            <div>
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div>
              <a
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

TeamItem.schema = {
  name: blockNames.TeamItem,
  label: 'Członek zespołu',
  category: 'rb-ui website',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    memberName: 'Jan Kowalski',
    role: 'Projektant Frontendu',
    twitter: '',
    github: '',
    linkedin: '',
    picture: {
      src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Portale Społecznościowe',
      defaultOpen: true,
      props: [
        {
          name: 'twitter',
          label: 'Nazwa użytkownika Twittera',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'linkedin',
          label: 'Nazwa użytkownika Linkedin',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'github',
          label: 'Nazwa użytkownika Github',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default TeamItem
