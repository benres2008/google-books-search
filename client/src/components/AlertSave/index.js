import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertSave(props) {
  
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="succes" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Book Added to "Saved" List!</Alert.Heading>
        </Alert>
      );
    }
    
  }
  
export default AlertSave;