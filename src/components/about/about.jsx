import React from "react";
import Futter from "../futter/futter";
import Projectss from "../Projectss/Projectss";
import logo from "../../assets/img/Mask group.png";
import background from "../../assets/img/image.png";
import "./about.scss";
import fon from "../../assets/img/fon.png";
const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from innovative engineering solutions to the quality of our construction projects. Our commitment to the highest standards ensures we deliver exceptional results every time.",
  },
  {
    title: "Safety",
    description:
      "We ensure that our work environments are secure for our employees, clients, and stakeholders, adhering to the most stringent health and safety standards in the industry.",
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and innovation to provide cutting-edge solutions. We continuously explore new technologies and methods to stay ahead of industry trends and deliver smart results.",
  },
];

export default function about() {
  return (
    <div>
      <div className="banner">
        <img className="banner-bg" src={fon} alt="Background" />
        {/* <img className="banner-bg" src={background} alt="Background" /> */}
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
          {/* <h1 className="banner-title">OUR EXPERIENCE IS YOUR SUCCESS</h1> */}

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
      </div>
      {/* //////////////////////////// */}
      <div>
        <h1 className="About_h1">About Us</h1>
        <p className="About_p2">
          Mimar is a leading EPC (Engineering, Procurement, Construction)
          company, established to provide comprehensive turnkey services in
          design, procurement, construction, and commissioning. We successfully
          deliver projects across diverse sectors, ranging from civil
          infrastructure to large-scale industrial projects.
          <br />
          <br />
          Our team blends experience and innovation, ensuring the seamless
          execution of complex projects. With a commitment to quality, safety,
          and sustainability, Mimar is your trusted partner for engineering
          excellence.
        </p>
      </div>
      {/* /////////////////////// */}
      <div className="Ekskavatir">
        <img className="Ekskavatir_img" src={fon} alt="" />
      </div>
      {/* /////////////////////// */}
      <div className="Ekskavatirdiv1">
        <h1 className="Ekskavatirdiv2">What we offer</h1>
        <div className="Ekskavatirdiv4">
          <div className="Ekskavatirdiv5">
            <h2 className="Ekskavatirdiv6">01</h2>
            <h1 className="Ekskavatirdiv7">Expert Team</h1>
            <p className="Ekskavatirdiv8">
              A blend of experienced professionals and innovative thinkers
              working together to achieve exceptional results.
            </p>
          </div>
          <div className="Ekskavatirdiv5">
            <h2 className="Ekskavatirdiv6">02</h2>
            <h1 className="Ekskavatirdiv7">Expert Team</h1>
            <p className="Ekskavatirdiv8">
              A blend of experienced professionals and innovative thinkers
              working together to achieve exceptional results.
            </p>
          </div>
        </div>
        <div className="Ekskavatirdiv4">
          <div className="Ekskavatirdiv5">
            <h2 className="Ekskavatirdiv6">03</h2>
            <h1 className="Ekskavatirdiv7">Expert Team</h1>
            <p className="Ekskavatirdiv8">
              A blend of experienced professionals and innovative thinkers
              working together to achieve exceptional results.
            </p>
          </div>
          <div className="Ekskavatirdiv5">
            <h2 className="Ekskavatirdiv6">04</h2>
            <h1 className="Ekskavatirdiv7">Expert Team</h1>
            <p className="Ekskavatirdiv8">
              A blend of experienced professionals and innovative thinkers
              working together to achieve exceptional results.
            </p>
          </div>
        </div>
      </div>
      {/* /////////////////////////// */}
      <div className="Ekskavatir">
        <img className="Ekskavatir_img" src={fon} alt="" />
      </div>
      {/* ////////////////////////// */}
      <div className="Mission_mission">
        <div className="Mission1_mission">
          <h1 className="Mission2_mission">Mission</h1>
          <p className="Mission3_mission">
            To create innovative and reliable projects that transform cities,
            improve the quality of life, and leave a legacy for future
            generations.
          </p>
        </div>
        <div className="Mission5_mission">
          <h1 className="Mission2_mission">Vision</h1>
          <p className="Mission3_mission">
            To become a recognized leader in the construction industry by
            implementing advanced technologies, improving the quality of work.
          </p>
        </div>
        <div className="Mission4_mission">
          <h1 className="Mission2_mission">Target</h1>
          <p className="Mission3_mission">
            To build with confidence in tomorrow, creating high-quality and
            innovative projects that align with global standards.
          </p>
        </div>
      </div>
      {/* /////////////////////////// */}
      <section className="values">
        <h1 className="values__title">Values</h1>
        <div className="values__list">
          {values.map((item, index) => (
            <div className="values__card" key={index}>
              <h3 className="values__card-title">{item.title}</h3>
              <p className="values__card-description">{item.description}</p>
              <img
                className="values__image"
                src={background}
                alt="Company values illustration"
              />
            </div>
          ))}
        </div>
      </section>
      {/* /////////////////////////////// */}
      <Projectss />
      <Futter />
    </div>
  );
}
