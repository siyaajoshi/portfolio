import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="siyajoshi"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://ca.linkedin.com/in/siyajoshi?trk=profile-badge"
        >
          Siya Joshi
        </a>
      </div>
    </div>
  );
}

export default Contact;
