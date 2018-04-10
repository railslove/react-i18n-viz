import React from 'react'
import i18n from 'i18next'
import { mount } from 'enzyme'
import { I18nextProvider, Trans as I18nextTrans } from 'react-i18next'
import I18nVizWrapper from '../src/components/I18nVizWrapper'
import { Trans } from '../src/react-i18next'

i18n.init({
  resources: {
    en: {
      translations: {
        the_phrase: 'I am Groot'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations'
})

describe('react-intl Integration', () => {
  let mountedComponent

  const i18nViz = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <I18nextProvider i18n={i18n}>
          <Trans i18nKey="the_phrase" description="The only one" />
        </I18nextProvider>
      )
    }
    return mountedComponent
  }

  beforeEach(() => {
    mountedComponent = null
  })

  test('renders an I18nVizWrapper', () => {
    expect(i18nViz().find(I18nVizWrapper)).toHaveLength(1)
  })

  test('still renders the translation', () => {
    expect(
      i18nViz()
        .find(I18nextTrans)
        .text()
    ).toBe('I am Groot')
  })
})
