import React from 'react';

if ( process.env.BROWSER ) {
  require('../style/Header.less');
}

class Header extends React.Component {
  render() {
    return (
        <div className="header">
          isomorphic app sample
        </div>
    );
  }
}

export default Header;