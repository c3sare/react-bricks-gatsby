import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, types } from 'react-bricks/frontend'
import { textColors } from '../colors'
import blockNames from '../blockNames'

const FaqQuestion: types.Brick = ({ ...rest }) => {
  return (
    <div className="leading-6 mb-12" {...rest}>
      <Text
        propName="question"
        renderBlock={(props) => (
          <p
            className={classNames(textColors.gray900, 'font-extrabold mb-1')}
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
        placeholder="Odpowiedź..."
      />
      <RichText
        propName="answer"
        renderBlock={(props) => (
          <p className={textColors.gray800} {...props.attributes}>
            {props.children}
          </p>
        )}
        placeholder="Odpowiedź..."
      />
    </div>
  )
}

FaqQuestion.schema = {
  name: blockNames.Faq,
  label: 'Pytanie',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    question: 'Dlaczego powinieneś zmienić swój CMS?',
    answer: 'Ponieważ oczekujesz jak najlepszych wrażeń i funkcjonalności.',
  }),
}

export default FaqQuestion
