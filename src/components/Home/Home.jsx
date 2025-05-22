import React, { useEffect, useState } from "react";
import "./Home.scss";
import logo from "../../assets/img/Mask group.png";
import background from "../../assets/img/image.png";
import fon from "../../assets/img/fon.png";
import Engineering from "../../assets/img/Engineering.png";
import Procurement from "../../assets/img/Procurement.png";
import Construction from "../../assets/img/Construction.png";
import Mission from "../../assets/img/Mission.png";
import engineering from "../../assets/ener/engineering.png";
import construction from "../../assets/ener/construction.png";
import grin from "../../assets/ener/grin.png";
import map from "../../assets/ener/map.png";
import Environmental from "../../assets/ener/Environmental.png";
import Governance from "../../assets/ener/Governance.png";
import Frame63 from "../../assets/ener/Frame 63.png";

const Banner = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // остановка на 100%
          return 100;
        }
        return prev + 1; // увеличение ширины на 1%
      });
    }, 50); // интервал в 50 миллисекунд

    return () => clearInterval(interval); // очистка при удалении компонента
  }, []);

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
          <p className="mission-section_p1">
            To create innovative and reliable projects that transform cities,
            improve the quality of life, and leave a legacy for future
            generations.
          </p>
          <button className="mission-section_button1">See more</button>
        </div>
        <div className="mission-section_more">
          <p className="mission-section_more1">
            More than 20 successful projects on international level
          </p>
        </div>
        <img
          className="mission-section_img"
          src={Mission}
          alt="Team working on whiteboard"
        />
      </div>
      {/* //////////////////////////// */}
      <div className="Services">
        <h1 className="Services_h1">Services</h1>
        <div className="Commissioning">
          <div className="Commissioning_baner">
            <img className="Commissioning_img" src={Construction} alt="" />
            <div className="Commissioning_hover">
              <button className="Commissioning_button">→</button>
              <h1 className="Commissioning_h1">Commissioning</h1>
              <p lassName="Commissioning_p">
                Mimar ensures that construction work is carried out in strict
                accordance with international standards and customer
                requirements.
              </p>
            </div>
          </div>
          <div className="engineering">
            <div className="Commissioning_baner">
              <img className="Commissioning_img2" src={engineering} alt="" />
              <div className="Commissioning_hover1">
                <button className="Commissioning_button1">→</button>
                <h1 className="Commissioning_h11">Commissioning</h1>
              </div>
            </div>
            <div className="Commissioning_baner">
              <img className="Commissioning_img1" src={grin} alt="" />
              <div className="Commissioning_hover1">
                <button className="Commissioning_button1">→</button>
                <h1 className="Commissioning_h11">Commissioning</h1>
                <p lassName="Commissioning_p">
                  Mimar ensures that construction work is carried out in strict
                  accordance with international standards and customer
                  requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="engineering">
            <div className="Commissioning_baner">
              <img className="Commissioning_img1" src={grin} alt="" />
              <div className="Commissioning_hover1">
                <button className="Commissioning_button1">→</button>
                <h1 className="Commissioning_h11">Commissioning</h1>
                <p lassName="Commissioning_p">
                  Mimar ensures that construction work is carried out in strict
                  accordance with international standards and customer
                  requirements.
                </p>
              </div>
            </div>
            <div className="Commissioning_baner">
              <img className="Commissioning_img2" src={construction} alt="" />
              <div className="Commissioning_hover1">
                <button className="Commissioning_button1">→</button>
                <h1 className="Commissioning_h11">Commissioning</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className="Expertises">
        <h1 className="Expertises_h1">Expertises</h1>
        <div>
          <div className="Refineries">
            <div className="energy-card1">
              <div className="energy-card__lines1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line1" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button1">
                <span>→</span>
              </button>
            </div>
            {/* ///////////////// */}
            <div className="energy-card">
              <div className="energy-card__lines">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button">
                <span>→</span>
              </button>
            </div>
            {/* ////////////////// */}
            <div className="energy-card1">
              <div className="energy-card__lines1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line1" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button1">
                <span>→</span>
              </button>
            </div>
            {/* ////////////////// */}
            <div className="energy-card">
              <div className="energy-card__lines">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button">
                <span>→</span>
              </button>
            </div>
          </div>
          {/* //////////////// */}
          <div className="Refineries">
            <div className="energy-card">
              <div className="energy-card__lines">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button">
                <span>→</span>
              </button>
            </div>
            {/* ///////////////// */}
            <div className="energy-card1">
              <div className="energy-card__lines1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line1" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button1">
                <span>→</span>
              </button>
            </div>
            {/* ////////////////// */}
            <div className="energy-card">
              <div className="energy-card__lines">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button">
                <span>→</span>
              </button>
            </div>
            {/* ////////////////// */}
            <div className="energy-card1">
              <div className="energy-card__lines1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="line1" />
                ))}
              </div>
              <div className="energy-card__content">
                <p>Power plants & energy</p>
                <p>systems</p>
              </div>
              <button className="energy-card__button1">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* .................. */}
      <div className="Projects">
        <div className="Projects_1">
          <h1 className="Projects_2">Projects</h1>
          <div className="Projects_button">
            <button className="Projects_button_1">Active</button>
            <button className="Projects_button_2">Сompleted</button>
          </div>
        </div>
        <img className="map" src={map} alt="" />
      </div>
      <div className="progress-container">
        {/* <h2>Медленный прогресс-бар</h2> */}
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div className="ESG">
        <h1 className="ESG_1">ESG</h1>

        <div className="Environmental_22">
          <div className="Environmental_1">
            <img className="Environmental-img" src={Environmental} alt="" />
            <div className="Environmental">
              <p className="Environmental_p">1</p>
              <h1 className="Environmental_h1">Environmental Responsibility</h1>
            </div>
          </div>
          <div className="Environmental_1">
            <img className="Environmental-img" src={Frame63} alt="" />
            <div className="Environmental">
              <p className="Environmental_p">2</p>
              <h1 className="Environmental_h1">Social Impact</h1>
            </div>
          </div>
        </div>

        <div className="Environmental_22">
          <div className="Environmental_1">
            <img className="Environmental-img" src={Frame63} alt="" />
            <div className="Environmental">
              <p className="Environmental_p">3</p>
              <h1 className="Environmental_h1">Sustainability Goals</h1>
            </div>
          </div>
          <div className="Environmental_1">
            <img className="Environmental-img" src={Governance} alt="" />
            <div className="Environmental">
              <p className="Environmental_p">4</p>
              <h1 className="Environmental_h1">Governance Principles</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
