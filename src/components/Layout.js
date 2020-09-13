import React from 'react';

const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 15,
  paddingLeft: 15,
};

const Layout = ({ children }) => <div style={styles}>{children}</div>;

export default Layout;
