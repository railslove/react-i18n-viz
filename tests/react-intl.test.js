import React from 'react'
import { mount } from 'enzyme'
import {
  IntlProvider,
  FormattedMessage as IntlFormattedMessage,
  FormattedHTMLMessage as IntlFormattedHTMLMessage
} from 'react-intl'
import I18nVizWrapper from '../src/components/I18nVizWrapper'
import { FormattedMessage, FormattedHTMLMessage } from '../src/react-intl'

describe('react-intl Integration', () => {
  let mountedComponent
  let translations = {
    'the.phrase': 'I am Groot'
  }
  let ReactIntlVizComponent

  const intlViz = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <IntlProvider locale="en" messages={translations}>
          <ReactIntlVizComponent id="the.phrase" description="The only one" />
        </IntlProvider>
      )
    }
    return mountedComponent
  }

  beforeEach(() => {
    mountedComponent = null
  })

  describe('FormattedMessage', () => {
    beforeEach(() => {
      ReactIntlVizComponent = FormattedMessage
    })

    test('renders an I18nVizWrapper', () => {
      expect(intlViz().find(I18nVizWrapper)).toHaveLength(1)
    })

    test('still renders the translation', () => {
      expect(
        intlViz()
          .find(IntlFormattedMessage)
          .text()
      ).toBe('I am Groot')
    })
  })

  describe('FormattedHTMLMessage', () => {
    beforeEach(() => {
      ReactIntlVizComponent = FormattedHTMLMessage
    })

    test('renders an I18nVizWrapper', () => {
      expect(intlViz().find(I18nVizWrapper)).toHaveLength(1)
    })

    test('still renders the translation', () => {
      expect(
        intlViz()
          .find(IntlFormattedHTMLMessage)
          .text()
      ).toBe('I am Groot')
    })
  })
})
