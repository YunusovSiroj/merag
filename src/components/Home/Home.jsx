import React from "react";
import "./Home.scss";
import logo from "../../assets/img/Mask group.png";
import background from "../../assets/img/image.png";
import fon from "../../assets/img/fon.png";
import Engineering from "../../assets/img/Engineering.png";
import Procurement from "../../assets/img/Procurement.png";
import Construction from "../../assets/img/Construction.png";
import Mission from "../../assets/img/Mission.png";
const Banner = () => {
  return (
    <section>
      <div className="banner">
        <img className="banner-bg" src={background} alt="Background" />
        <div className="banner-content">
          <div className="banner-header">
            <img className="logo" src={logo} alt="Logo" />
            <ul className="nav-menu">
              <li>Expertises</li>
              <li>Projects</li>
              <li>ESG</li>
              <li>Contacts</li>
            </ul>
            <p className="phone">ENG</p>
          </div>
          <h1 className="banner-title">OUR EXPERIENCE IS YOUR SUCCESS</h1>
        </div>
      </div>
      <div className="about_us">
        <h1 className="about_h1">About Us</h1>
        <div className="about_uss">
          <p className="about_p">
            Founded in 2019, Mimar is a dynamic EPC contractor committed to
            delivering high-quality, innovative, and sustainable solutions. In a
            short period, we've rapidly achieved professional excellence,
            successfully executing complex projects across various industries.
            <br />
            <br />
            Our experienced team ensures that every project is completed on
            time, within budget, and to the highest standards. We specialize in
            infrastructure, energy, and industrial development, providing
            cutting-edge solutions that add value to our clients and
            communities.
          </p>
          <button className="about_button">See more</button>
        </div>
      </div>
      <div className="baner_img">
        <img className="baner_bg" src={fon} alt="Background" />
        <div className="baner_overlay">
          <div className="baner_item">
            <h1 className="baner_count">20+</h1>
            <p className="baner_text">Finished projects</p>
          </div>
          <div className="baner_item">
            <h1 className="baner_count">15+</h1>
            <p className="baner_text">Happy clients</p>
          </div>
          <div className="baner_item">
            <h1 className="baner_count">10+</h1>
            <p className="baner_text">Years experience</p>
          </div>
        </div>
      </div>
      <div className="What_oll">
        <h1 className="What_text">What we do</h1>
        <div className="What_baner_oll">
          <div className="What_baner">
            <img className="What_img" src={Engineering} alt="" />
            <div className="What_hover">
              <button className="What_button"> → </button>
              <div className="What_olltext">
                <h2 className="What_text2">Engineering</h2>
                <p className="What_p">
                  MIMAR offers design solutions taking into account modern
                  technologies and customer requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="What_baner">
            <img className="What_img" src={Procurement} alt="" />
            <div className="What_hover">
              <button className="What_button"> → </button>
              <div className="What_olltext">
                <h2 className="What_text2">Engineering</h2>
                <p className="What_p">
                  MIMAR offers design solutions taking into account modern
                  technologies and customer requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="What_baner">
            <img className="What_img" src={Construction} alt="" />
            <div className="What_hover">
              <button className="What_button"> → </button>
              <div className="What_olltext">
                <h2 className="What_text2">Engineering</h2>
                <p className="What_p">
                  MIMAR offers design solutions taking into account modern
                  technologies and customer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ....................... */}
      <div className="mission-section_oll">
        <div className="mission-section">
          <h1 className="mission-section_h1">Mission</h1>
          <p  className="mission-section_p1">To create innovative and reliable projects that transform cities, improve the quality of life, and leave a legacy for future generations.</p>
          <button className="mission-section_button1">See more</button>
        </div>
        <div className="mission-section_more">
          <p className="mission-section_more1">More than 20 successful projects on international level</p>
        </div >
        <img className="mission-section_img" src={Mission} alt="Team working on whiteboard" />
      </div>
  </section>
  );
};

export default Banner;
