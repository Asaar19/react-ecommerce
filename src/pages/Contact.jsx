import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <section className="padding-100">
        <div className="container">
          <div className="row">
            {/* <h2 className="theme-main-heading text-center mb-5">Contact Us</h2> */}

            <div className="col-md-6">
              <h2 className="mb-4">Feel free to contact us!</h2>

              <form action="" method="POST">
                <input
                  type="text"
                  placeholder="First Name"
                  value={isAuthenticated ? user.name : ""}
                />
                {/* <input type="text" placeholder="Last Name" /> */}
                <input type="email " placeholder="Email" value={isAuthenticated ? user.email : ""} />
                {/* <input type="password" placeholder="Password" /> */}
                <textarea name="" id="" cols="30" rows="6"></textarea>
                <input type="submit" className="form-btn" />
              </form>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1693821869645!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
