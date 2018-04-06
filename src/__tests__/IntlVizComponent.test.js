import React from 'react'
import { mount } from 'enzyme'
import {
  IntlProvider,
  FormattedMessage as IntlFormattedMessage
} from 'react-intl'
import { FormattedMessage } from '../plugs/react-intl'
import Balloon from '../components/Balloon'
import InfoContent from '../components/InfoContent'

xdescribe('IntlVizComponent', () => {
  let props
  let mountedComponent
  let translations = {
    'the.phrase': 'I am Groot'
  }

  const intlViz = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <IntlProvider locale="en" messages={translations}>
          <FormattedMessage id="the.phrase" description="The only one" />
        </IntlProvider>
      )
    }
    return mountedComponent
  }

  beforeEach(() => {
    mountedComponent = null
  })

  describe('in its default state', () => {
    test('renders translation', () => {
      expect(
        intlViz()
          .find(IntlFormattedMessage)
          .text()
      ).toBe('I am Groot')
    })

    test('shows no Balloon', () => {
      expect(intlViz().find(Balloon)).toHaveLength(0)
    })
  })

  describe('with user interactions', () => {
    test('shows tooltip on mouse enter', () => {
      intlViz().simulate('mouseEnter')
      expect(intlViz().find(Balloon)).toHaveLength(1)
    })

    test('hides tooltip on mouse leave', () => {
      intlViz().simulate('mouseEnter')
      intlViz().simulate('mouseLeave')
      expect(intlViz().find(Balloon)).toHaveLength(0)
    })
  })

  describe('in its active state', () => {
    beforeEach(() => {
      intlViz().simulate('mouseEnter')
    })

    test('renders id in tooltip', () => {
      console.log(intlViz().find(InfoContent))
      expect(
        intlViz()
          .find(InfoContent)
          .contains('the.phrase')
      ).toBe(true)
    })

    test('renders description in tooltip', () => {
      expect(
        intlViz()
          .find(InfoContent)
          .contains('The only one')
      ).toBe(true)
    })
  })
})
