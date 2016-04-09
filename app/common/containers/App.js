import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

if ( process.env.BROWSER ) {
  require('../style/App.less');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>body</main>
        <Footer />
      </div>
    );
  }
}

export default App;