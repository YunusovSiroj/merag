import React from "react";
import "./futter.scss";
import contactImage from "../../assets/img/Engineering.png"; // замени на свой путь
import Maskgroup from "../../assets/img/Mask group.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact__image">
          <img src={contactImage} alt="Building" />
        </div>
        <div className="contact__form-section">
          <div className="ContactUs">
            <h2>Contact Us</h2>
            <p>
              Thank you for your interest in our construction services! If you
              have any questions or would like to discuss your project, please
              don’t hesitate to reach out.
            </p>
          </div>
          <div className="Request">
            <div className="contact__socials">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>

            <form className="contact__form">
              <h3>Commercial Request</h3>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button type="submit">Apply</button>
            </form>
          </div>
        </div>
      </div>
      {/* .............................. */}
      <div className="Mission">
        <div className="Mission_1">
          <div className="Mission_2">
            <h1 className="Mission_h1">About Us</h1>
            <p className="Mission_p">Mission</p>
            <p>Vision</p>
            <p>Values</p>
          </div>
          <div className="Mission_2">
            <h1 className="Mission_h1">About Us</h1>
            <p className="Mission_p">Mission</p>
            <p>Vision</p>
            <p>Vision</p>
            <p>Vision</p>
            <p>Values</p>
          </div>
          <div className="Mission_2">
            <h1 className="Mission_h1">About Us</h1>
            <p className="Mission_p">Mission</p>
            <p>Vision</p>
            <p>Values</p>
            <p>Values</p>
            <p>Values</p>
            <p>Values</p>
          </div>
          <div className="Mission_2">
            <h1 className="Mission_h1">About Us</h1>
            <p className="Mission_p">Mission</p>
            <p>Vision</p>
            <p>Vision</p>
            <p>Values</p>
          </div>
          <div className="Mission_icon">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="Contacts">
          <h1 className="Contacts_1">Contacts</h1>
          <div className="Contacts_2">
            <div className="Contacts_3">
              <p className="Contacts_4">
                Al Shmookh Business Center M 1003, One UA UAQ Free Trade Zone,
                Umm Al Quwain, UAE
              </p>
            </div>
            <div className="Contacts_1">
              <p className="Contacts_1">
                Г. Ташкент, Юнусабадский район, ул. Абдулла Кадырий, 7 Узбекский
              </p>
            </div>
          </div>
          <div className="Contacts_5">
            <div className="Contacts_1">
              <p>+998 99 123 45 67</p>
            </div>
            <div>
              <p>mimargroup@info</p>
            </div>
            <img src={Maskgroup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
