import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

if ( process.env.BROWSER ) {
  require('../style/App.less');
}

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <main className="main">
          { children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;