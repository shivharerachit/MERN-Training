import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyLogo</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.link}>About</a></li>
        <li style={styles.navItem}><a href="#services" style={styles.link}>Services</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
  },
  linkHover: {
    backgroundColor: '#555',
  },
};

export default Navbar;
