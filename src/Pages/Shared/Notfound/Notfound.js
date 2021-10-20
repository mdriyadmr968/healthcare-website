import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h1>404 Not found</h1>

      <Link to="/home">
        <Button variant="primary">Back To Home</Button>{" "}
      </Link>
    </div>
  );
};

export default Notfound;
