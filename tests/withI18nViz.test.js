import React from 'react'
import { mount } from 'enzyme'
import { withI18nViz } from '../src/'
import Balloon from '../src/components/Balloon'
import InfoContent from '../src/components/InfoContent'

const SomeI18nComponent = props => <div>{props.translations[props.id]}</div>
const VizI18nComponent = withI18nViz(({ id, description }) => ({
  id,
  description
}))(SomeI18nComponent)

describe('IntlVizComponent', () => {
  let props
  let mountedComponent
  let translations = {
    'the.phrase': 'I am Groot'
  }

  const intlViz = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <VizI18nComponent
          translations={translations}
          id="the.phrase"
          description="The only one"
        />
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
          .find(SomeI18nComponent)
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
