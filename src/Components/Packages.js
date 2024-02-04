import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/packages.css';

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
  ];

  // Filter packages to display only two
  const displayedPackages = packages.slice(0, 2);

  return (
    <div className="container mt-4">
      <div className="row">
            <div className="col-lg-12">
                <div className="title-box text-center text-white mb-4">
                    <h3 className="title-heading mt-4">Pricing Packages </h3>
                    <p className="text f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                        elementum mauris
                        sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.
                    </p>
                </div>
            </div>
        </div>
      <div className="row justify-content-center">
        {displayedPackages.map((pack) => (
          <div key={pack.id} className="col-md-6 mb-4 text-center">
            <div className="pricing-box bg-dark text-white" style={{ height: '100%' }}>
              {pack.current && (
                <div className="pricing-badge">
                  <span className="badge">Current</span>
                </div>
              )}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="f-20 text-primary">{pack.name}</h5>
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
                    <h6 className="text mb-0">Per Month</h6>
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
