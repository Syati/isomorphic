import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>body</div>
        <Footer />
      </div>
    );
  }
}

export default App;