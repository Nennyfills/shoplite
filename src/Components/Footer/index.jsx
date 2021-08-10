import React from 'react';

import './footer.scss';

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear() + '  ';
  return (
    <section className="footer" data-test="footer">
      Lumin &copy; <span>{getYear}</span>
    </section>
  );
};

export default Footer;
