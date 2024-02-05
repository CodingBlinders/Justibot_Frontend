import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/packages.css';
import { LinearGradient } from 'react-text-gradients';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Basic Package',
      description: 'Access to basic legal consultation features.',
      details: [
        'Limited legal consultations',
        'Common legal resources',
        '20 chat support messages',
      ],
      price: 'Free',
      pricealt: '$0.00',
    },
    {
      id: 2,
      name: 'Premium Package',
      description: 'Includes premium legal resources and priority support.',
      details: [
        'Unlimited legal consultation',
        '24/7 priority chat support',
        'Access to exclusive legal resources',
      ],
      price: '$49.99',
      pricealt: '$69.99',
      current: true,
    },
    {
      id: 3,
      name: 'Premium Package',
      description: 'Includes premium legal resources and priority support.',
      details: [
        'Unlimited legal consultation',
        '24/7 priority chat support',
        'Access to exclusive legal resources',
      ],
      price: '$49.99',
      pricealt: '$69.99',
      current: true,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
        <h1 className="large-text title-text">
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
              Our Packages
            </LinearGradient>
          </h1><br/>
        </div>
      </div>
      <div className="row justify-content-center centered-content">
        {packages.map((pack) => (
          <div key={pack.id} className="col-md-4 text-center"> {/* Adjust the width as needed */}
            <div className="pricing-box bg-dark text-white" style={{ height: '80%', width:'80%'}}>
              {pack.current && (
                <div className="pricing-badge">
                  <span className="badge">Current</span>
                </div>
              )}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h3 className="title-text-packages text-primary">{pack.name}</h3>
                  <p className="card-text">{pack.description}</p>
                  <ul className="list-unstyled">
                    {pack.details.map((detail, index) => (
                      <li key={index}>
                        <p className="mb-2">
                          <i className="bi bi-dot"></i> {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="plan mt-4 pt-2">
                    <h4 className="text">
                      <s> {pack.pricealt}</s> <span className="plan pl-3 text">{pack.price}</span>
                    </h4>
                    <h1 className="text mb-0 title-text-packages">Per Month </h1>
                  </div>
                  <Link to={`/pro`}>
                    <button type="button" className="btn btn-primary btn-lg btn-block mt-3">
                      Upgrade
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
