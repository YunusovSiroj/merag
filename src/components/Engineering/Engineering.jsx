import React from "react";
import Futter from "../futter/futter";
import logo from "../../assets/img/Mask group.png";
import Engineeringg from "../../assets/Engineering/Engineering.png";
import kanku from "../../assets/Engineering/kanku.png";
import stanok from "../../assets/Engineering/stanok.png";
import stan from "../../assets/Engineering/stan.png";
import "./Engineering.scss";
export default function Engineering() {
  return (
    <div>
      <div className="banner">
        <img className="banner-bg" src={Engineeringg} alt="Background" />
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
          <h1 className="banner-title">Engineering</h1>
          <p className="banner-titleee">Home → Engineering</p>
        </div>
      </div>
      <div className="provide">
        <div className="provide_text">
          <p>
            We provide innovative and effective design solutions that meet the
            latest technology standards and client requirements. Our engineering
            team specializes in:
          </p>
        </div>
      </div>
      {/* /////////////////////////////////////// */}
      <div>
        <div className="early-phase-engineering-absolute">
          <div className="background-image">
            <img src={kanku} alt="" />
          </div>{" "}
          {/* Empty div for the background image */}
          <div className="content-wrapper">
            <h2 className="title">Early phase engineering</h2>
            <p className="description">
              From the planning and development of new facilities to the
              evaluation, enhancement, or decommissioning of existing
              infrastructure, our goal is to define optimal logistical and
              commercial project parameters that drive production, improve
              performance, and meet regulatory and business requirements. Our
              early-phase engineering services include:
            </p>
            <ul className="services-list">
              <li>Feasibility studies, concept selection, and Pre-FEED</li>
              <li>Initial budget and schedule estimates</li>
              <li>Technology and site selection</li>
              <li>Permitting support</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="early-phase-engineering-absolute2">
          <div className="background-image2">
            <img src={stanok} alt="" />
          </div>{" "}
          {/* Empty div for the background image */}
          <div className="content-wrapper2">
            <h2 className="title2">Front-End Engineering and Desing (FEED)</h2>
            <p className="description2">
              From the planning and development of new facilities to the
              evaluation, enhancement, or decommissioning of existing
              infrastructure, our goal is to define optimal logistical and
              commercial project parameters that drive production, improve
              performance, and meet regulatory and business requirements. Our
              early-phase engineering services include:
            </p>
            <ul className="services-list2">
              <li>Feasibility studies, concept selection, and Pre-FEED</li>
              <li>Initial budget and schedule estimates</li>
              <li>Technology and site selection</li>
              <li>Permitting support</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="early-phase-engineering-absolute">
          <div className="background-image">
            <img src={stan} alt="" />
          </div>{" "}
          {/* Empty div for the background image */}
          <div className="content-wrapper">
            <h2 className="title">Detailed Engineering and Execution</h2>
            <p className="description">
              From the planning and development of new facilities to the
              evaluation, enhancement, or decommissioning of existing
              infrastructure, our goal is to define optimal logistical and
              commercial project parameters that drive production, improve
              performance, and meet regulatory and business requirements. Our
              early-phase engineering services include:
            </p>
            <ul className="services-list">
              <li>Feasibility studies, concept selection, and Pre-FEED</li>
              <li>Initial budget and schedule estimates</li>
              <li>Technology and site selection</li>
              <li>Permitting support</li>
            </ul>
          </div>
        </div>
      </div>
      <Futter />
    </div>
  );
}
