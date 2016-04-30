import React from 'react';


class Header extends React.Component {
  render() {
    const styles = require('./Header.less');
    return (
        <div className={styles.header}>
          isomorphic app sample
        </div>
    );
  }
}

export default Header;