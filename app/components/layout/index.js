import React from 'react';
import styles from './styles.css';

class Layout extends React.Component {
   
  render () {
    return (
      <div className="app">
        {this.props.children}
        <footer>
          <span> © madebyhuman 2016</span>
          <span> <a href="mailto:hello@madebyhuman.se">hello@madebyhuman.se</a></span>
        </footer>
      </div>
    );
  }
}

export default Layout;
