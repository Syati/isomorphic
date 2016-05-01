import React from 'react';


class Header extends React.Component {
  render() {
    const styles = require('./Header.less');
    const icon = require('./icon.png');
    
    return (
        <div className={styles.header}>
          <img className={styles.logo} src={icon} />
          <div className={styles.title}>
            isomorphic app sample
          </div>
        </div>
    );
  }
}

export default Header;