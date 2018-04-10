# react-i18n-viz

> Visualization of i18n-strings, inspired by [railslove/i18n_viz](https://github.com/railslove/i18n_viz).

<p align="center">
  <img src=".github/demo.gif" width="450" height="236" />
</p>

...or view the [Demo](https://railslove.github.io/react-i18n-viz/).

**In developoment.**

This Library provides a [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html) to wrap around i18n Components. If you hover over such a Component, a Tooltip will be visible with the id and description of the i18n String. This is very useful if you want to check in your Browser which String belongs to which id.

It also includes support for popular i18n Libraries:

* [react-intl](https://github.com/yahoo/react-intl)
* [react-i18next](https://github.com/i18next/react-i18next)

Those Components are simply the Components of their Libraries, wrapped with the HOC.

It has nearly no impact on the size of your bundle in Production (or other environments, where the visualization should not be visible). If it isn't used, it won't be bundled.

## Usage

**react-i18n-viz is turned off by default.** This prevents that the tooltips are visible in environments, which you don't specify. To enable the Tooltips add a special Environment Variable:

```
REACT_APP_SHOW_I18N_VIZ=true
```

You can find a working App in [/example](example).

### with react-intl

Instead of importing `FormattedMessage` and `FormattedHTMLMessage` from react-intl, import them from `react-i18n-viz/lib/react-intl`. You can use those components like their react-intl counterparts.

```js
import React from 'react'
import { IntlProvider } from 'react-intl'
import { FormattedMessage } from 'react-i18n-viz/lib/react-intl'

export default class MyComponent extends React.Component {
  render() {
    return (
      <IntlProvider locale="en" messages={/* ... */}>
        <div>
          <FormattedMessage
            id="app.greeting"
            description="A friendly greeting."
            values={{ name: 'John' }}
          />
        </div>
      </IntlProvider>
    )
  }
}
```

### with react-i18next

Instead of importing `Trans` from react-i18next, import it from `react-i18n-viz/lib/react-i18next`. You can use it like the `Trans`-Component from react-i18next.

To show a description in the i18n-viz Tolltip, you can provide the `description` prop.

```js
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Trans } from 'react-i18n-viz/lib/react-i18next'

export default class MyComponent extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <Trans i18nKey="app_greeting" description="A friendly greeting.">
            Hello {{ name }}, how are you today
          </Trans>
        </div>
      </I18nextProvider>
    )
  }
}
```

### as Higher-Order Component

**Example**

```js
import { withI18nViz } from 'react-i18n-viz'

class MyCustomI18nComponent {
  static propTypes = {
    myI18nId: PropTypes.string,
    myI18nDescription: PropTypes.string
  }

  // ...
}

const mapVizProps = props => ({
  id: props.myI18nId, // required
  description: props.myI18nDescription // optional
})

export default withI18nViz(mapVizProps)(MyCustomI18nComponent)
```

#### `withI18nViz(mapVizProps)`

Enhances a React Component with the i18n visualization.

* **mapVizProps** (Function). Defines which of your props are used as i18n id and as i18n description. Needs to return an object with `{ id, description }`.

## Contribute

1.  Clone repo
2.  `npm install`
3.  `npm link && cd example && npm link react-i18n-viz`
4.  Run `npm start` to bundle the library in dev mode
5.  Run `cd example && npm start` in a separate shell to start the example app

## License

[MIT](LICENSE) © 2018 - present, Railslove GmbH.

Made for you with 💚 by [Railslove](https://www.railslove.com/).
