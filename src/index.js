import {
  FormattedMessage as FMessage,
  FormattedHTMLMessage as FHTMLMessage
} from 'react-intl'
import createVizComponent from './createVizComponent'

let useVizComponents = true

export const configureIntlViz = opts => {
  const config = {
    useVizComponents: true,
    ...opts
  }

  useVizComponents = config.useVizComponents
}

export const FormattedMessage = useVizComponents
  ? createVizComponent(FMessage)
  : FMessage

export const FormattedHTMLMessage = useVizComponents
  ? createVizComponent(FHTMLMessage)
  : FHTMLMessage
