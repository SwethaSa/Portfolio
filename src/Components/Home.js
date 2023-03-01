import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import "./HomePage.css";
import Typewriter from "typewriter-effect";
import Myimg from "../assets/Myimg.jpeg";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { VscGithubAlt } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { TfiDownload } from "react-icons/tfi";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);



  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="homepage">
          <video autoPlay loop muted playsInline className="videos"> 
        <source  src='https://rr3---sn-npoeened.c.drive.google.com/videoplayback?expire=1677665044&ei=1Or-Y_7NIoKm-LYPnLa7gAQ&ip=103.162.198.171&cp=QVRMWUdfVFBSRVhPOl9kdXh0UU1SaXAxLVBwUm5SUENMQWtOSEYwX1NGb2FLLVZJRjhvY25RcDI&id=f546add9d232fa0f&itag=22&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1f-aWbLt900rqfwl4-L7oRdE1EV0DcLDl&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=10.007&lmt=1677650287021829&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgLj_DfNTfcArmcLJy6UlAeE98jm4pB8QeC9chwk1_g2cCIBBGgqkHCbui5eB-LuKDRkPO3D-auDZVYgUNd8OXXZVj&cpn=Zl4eYSnIFvQij756&c=WEB_EMBEDDED_PLAYER&cver=1.20230226.00.00&redirect_counter=1&cm2rm=sn-h55ls7l&fexp=24465583&req_id=c433b44f29daa3ee&cms_redirect=yes&cmsv=e&mh=mf&mm=34&mn=sn-npoeened&ms=ltu&mt=1677650458&mv=m&mvi=3&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgfx2COKDZMgB9AArvmxDEPdNHDDj9IKNmcEpExKPCLUoCIQDbaNiJcWi1mD6CuhT8loXoSVWSJfmkz5WPQ8gCBz8nHA%3D%3D' type="video/mp4" />
          </video>
          <div className="left">
            <div className="greeting">
            <div className="names" onClick={() => setIsopen(!isOpen)}>Swetha Sakthi</div>
              <h1 className="hello">Hello</h1>
              <h2 className="name">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("This is Swetha Sakthi")
                      .start();
                  }}
                />
              </h2>
            </div>
            <div className="lorem-ipsum">
              <p className="line"></p>
              <p className="text">
                {" "}
                <motion.div
                  transition={{ layout: { duration: 1, type: "spring" } }}
                  Layout
                  onClick={() => setIsopen(!isOpen)}
                  className="card"
                >
                  <h4 Layout="position">Know About Me</h4>
                  {isOpen && (
                    <motion.div>
                      <p>
                      I am a dedicated Full Stack Developer with experience in JavaScript, React, Node.js, and MongoDB. Building web applications and developing RESTful APIs are just a few of the projects I've worked on. I'm always keen to learn new things and stay current with developments in my field. If you want to say hi, Connect with me.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </p>
            </div>
            
          </div>

          <div className="right">
            <img src={Myimg} alt="placeholder" className="image" />
          </div>
          <div className="link">
            <Link to="skills" smooth={true} duration={1500}>
              <button className="button">Skills</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="works" smooth={true} duration={1500}>
              <button className="button">Works</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="contact" smooth={true} duration={1500}>
              <button className="button">Connect</button>
            </Link>
            <div className="social-media">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithubAlt className="gitlink" />
              </a>
              <a
                href="mailto:swethasakthi927@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiMail title="Email" className="maillink" />
              </a>

              <a
                href="https://upload.wikimedia.org/wikipedia/commons/c/cc/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiDownload download title="Resume" className="dlink" />
              </a>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
