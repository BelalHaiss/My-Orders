import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';

import alertContext from '../context/alertContext/alertContext';
const Alerts = () => {
  const theAlertContext = useContext(alertContext);
  const [show, setShow] = useState(true);

  return (
    theAlertContext.alerts.length > 0 &&
    theAlertContext.alerts.map((alert) => (
      <Alert
        variant={alert.type}
        dismissible
        onClose={() => theAlertContext.clearAlert(alert.id)}
        key={alert.id}
      >
        <Alert.Heading>{alert.msg}</Alert.Heading>
      </Alert>
    ))
  );
};

export default Alerts;
