import i18n from 'i18next'

i18n.init({
  resources: {
    en: {
      translations: {
        app_greeting: 'Hello <1>{{name}}</1>, how are you today?'
      }
    },
    de: {
      translations: {
        app_greeting: "Hallo <1>{{name}}</1>, wie geht's?"
      }
    },
    es: {
      translations: {
        app_greeting: 'Hola <1>{{name}}</1>. ¿Qué tal?'
      }
    }
  },
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  react: {
    wait: true
  }
})

export default i18n
