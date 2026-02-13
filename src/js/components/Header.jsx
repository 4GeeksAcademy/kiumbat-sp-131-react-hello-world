import React from 'react';

const Header = () => {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3">
          <div className="m-4 m-lg-5">
            <h1 className="display-3 fw-normal">A Warm Welcome!</h1>
            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <a className="btn btn-primary btn-lg" href="#!">Call to action!</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;