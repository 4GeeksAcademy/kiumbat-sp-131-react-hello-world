import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 text-center">
        <img className="card-img-top" src="https://placehold.co/600x400" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer py-3 bg-transparent border-top-0">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
};

export default Card;