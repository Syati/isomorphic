import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class App extends React.Component {
  render() {
    const { children } = this.props;
    const styles = require('./App.less');

    return (
      <div>
        <Header />
        <main className={styles.main}>
          { children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;