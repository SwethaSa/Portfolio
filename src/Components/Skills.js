import { Element } from "react-scroll";
import "./Skills.css";
import "./HomePage.css";

import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaCog,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPostman,
  SiRedux,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiExpress,
  SiCsswizardry,
  SiMaterialui
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

import { Card, CardBody, CardTitle } from 'reactstrap';

export default function Skills() {
  return (
    <div>
      <Element id="skills">
        

        <Card className="card-container">
          <CardBody>
            <CardTitle className="heading">I Know</CardTitle>

            <div className="icons">
              <div className="icon">
                <FaCog title="REST-Api's" className="rest-api" />
              </div>
              <div className="icon">
                <SiMongodb title="MongoDB" className="mongo" />
              </div>
              <div className="icon">
                <FaDatabase title="SQL" className="sql" />
              </div>
              <div className="icon">
                <SiExpress title="Express Js" className="express" />
              </div>
              <div className="icon">
                <FaNodeJs title="Node Js" className="node" />
              </div>
              <div className="icon">
                <SiRedux title="Redux" className="redux" />
              </div>
              <div className="icon">
                <SiMaterialui title="Materialui" className="material" />
              </div>
              <div className="icon">
                <FaReact title="React" className="react" />
              </div>
              <div className="icon">
                <FaBootstrap title="BootStrap" className="bootstrap" />
              </div>
              <div className="icon">
                <FaJsSquare title="JavaScript" className="js" />
              </div>
              <div className="icon">
                <SiCsswizardry title="CSS" className="css" />
              </div>
              <div className="icon">
                <TiHtml5 title="HTML" className="html" />
              </div>
            </div>

            <CardTitle className="heading2">I Used</CardTitle>
            <div className="tools">
              <div className="icon2">
                <SiNetlify title="Netlify" className="netlify" />
              </div>
              <div className="icon2">
                <FaGithub title="GitHub" className="github" />
              </div>
              <div className="icon2">
                <FaGitAlt title="Git" className="git" />
              </div>
              <div className="icon2">
                <SiPostman title="Postman" className="postman" />
              </div>
              <div className="icon2">
                <SiVercel title="Vercel" className="vercel" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Element>
    </div>
  );
}
