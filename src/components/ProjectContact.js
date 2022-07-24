import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Lorem ipsum dolor</div>
      <div style={styles.content}>
        `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      </div>
    </div>
  );
}

export default Card;
