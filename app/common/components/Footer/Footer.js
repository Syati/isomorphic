import React from 'react';


class Footer extends React.Component {
  render() {
    const styles = require('./Footer.less');

    return (
        <div className={styles.footer}>
          <p>Copyright © 2016 Syati.info</p>
        </div>
    );
  }
}

export default Footer;