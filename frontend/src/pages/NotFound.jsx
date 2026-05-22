import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh', // Ensures it takes up a good portion of the screen
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif', // Modern, clean default fonts
    },
    errorCode: {
      fontSize: '8rem', // Massive, eye-catching 404
      fontWeight: '800',
      color: '#1e293b', // Dark slate gray
      margin: '0', 
      lineHeight: '1',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#334155',
      margin: '20px 0 10px 0', // Adds clear spacing to prevent overlap
    },
    message: {
      fontSize: '1.125rem',
      color: '#64748b', // Softer gray for secondary text
      marginBottom: '40px', // Pushes the button down nicely
      maxWidth: '500px',
    },
    button: {
      display: 'inline-block',
      padding: '14px 28px',
      backgroundColor: '#3b82f6', // A vibrant, modern blue
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      transition: 'transform 0.2s',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.heading}>Page Not Found</h2>
      <p style={styles.message}>
        Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;