import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    initialState: PropTypes.object
  };

  render() {
    const {assets, component, initialState} = this.props;

    return (
      <html>
        <head>
          <title>Isomorphic App Sample</title>
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>)}

          {/* resolves the initial style flash (flicker) on page load in development mode */}
          { Object.keys(assets.styles).length == 0 ? null : null }
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: component}}></div>
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__= ${JSON.stringify(initialState)};`}} ></script>
          {Object.keys(assets.javascript).map((script, i) =>
            <script src={assets.javascript[script]} key={i}></script>
          )}
        </body>
      </html>
    );
  }
}