import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "Mr Smart";
  
  return (
    <div style={{ width: '18rem', margin: '20px auto' }}>
      <Card>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center' }}>
        Hello, {firstName || "there"}!
      </p>
    </div>
  );
};

export default App;