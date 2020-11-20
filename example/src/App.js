import React from 'react';
import FloatingComponent from '@tanohzana/react-floating-component';

const containerStyle = {
  marginLeft: '50px',
  marginTop: '50px',
};

const innerComponentStyle = {
  borderRadius: '6px',
  border: '1px solid #ddd',
  padding: '1em',
  textAlign: 'center',
  width: '200px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

const App = () => {
  return (
    <div style={containerStyle}>
      <FloatingComponent>
        <div style={innerComponentStyle}>This is a floating test</div>
      </FloatingComponent>
    </div>
  );
};

export default App;
