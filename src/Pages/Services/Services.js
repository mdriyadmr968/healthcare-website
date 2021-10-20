import './Services.css';

import {
  useEffect,
  useState,
} from 'react';

import { Row } from 'react-bootstrap';

import Service from '../Services/Service';

const Services = () => {
  const [serv, setServ] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServ(data));
  }, []);

  return (
    <div>
      <h2 className="text-success mt-5">Hospital Services</h2>
      <div className="service-container">
        <Row className="justify-content-md-center mx-5">
          {serv.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
