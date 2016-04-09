import React from 'react';

if ( process.env.BROWSER ) {
  require('../style/Footer.less');
}

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <p>Copyright © 2015 Syati.info</p>
        </div>
    );
  }
}

export default Footer;