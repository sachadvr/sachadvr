import React from "react";
import { DiDocker, DiJavascript, DiTerminal } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { SiShell, SiSvelte, SiSymfony, SiTypescript } from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import "./WhoAmi.scss";

import { HiOutlineCode, HiOutlineQrcode } from "react-icons/hi";
const WhoAmi = () => {
  const [langs, setLangs] = React.useState<JSX.Element[]>([]);

  function getLanguages() {
    let languagesSET: string[] = [];
    if (localStorage.getItem("portfolio") != null) {
      JSON.parse(localStorage.getItem("portfolio") || "{}").map(
        (project: any) =>
          Object.keys(project?.languages).map((language: string) => {
            languagesSET.push(language);
          })
      );
      languagesSET = [...new Set(languagesSET)];
      const languagesElement: JSX.Element[] = [];
      // Adding icons myself (because github api doesn't theses languages)
      languagesElement.push(<FaReact key="React" />);
      languagesElement.push(<FaVuejs key="Vue" />);
      languagesElement.push(<SiSymfony key="Symfony" />);
      languagesSET.map((language: string) => {
        switch (language) {
          case "JavaScript":
            languagesElement.push(<DiJavascript key={language} />);
            break;
          case "TypeScript":
            languagesElement.push(<SiTypescript key={language} />);
            break;
          case "Go":
            break;
          case "Dockerfile":
            languagesElement.push(<DiDocker key={language} />);
            break;
          case "Makefile":
            break;
          case "Shell":
            languagesElement.push(<DiTerminal key={language} />);
            break;
          case "NSIS":
            break;
          case "Batchfile":
            break;
          case "EJS":
            break;
          case "Svelte":
            languagesElement.push(<SiSvelte key={language} />);
            break;
          case "HTML":
            languagesElement.push(<FaHtml5 key={language} />);
            break;
          case "CSS":
            languagesElement.push(<FaCss3 key={language} />);
            break;
          case "SCSS":
            languagesElement.push(<FaSass key={language} />);
            break;
          case "PHP":
            languagesElement.push(<FaPhp key={language} />);
            break;
          case "Java":
            languagesElement.push(<FaJava key={language} />);
            break;
          case "Python":
            languagesElement.push(<FaPython key={language} />);
            break;
          case "React":
            languagesElement.push(<FaReact key={language} />);
            break;
          case "Vue":
            languagesElement.push(<FaVuejs key={language} />);
            break;
          case "Symfony":
            languagesElement.push(<SiSymfony key={language} />);
            break;
          case "PowerShell":
            languagesElement.push(<VscTerminalPowershell key={language} />);
            break;
          case "Hack":
            languagesElement.push(<HiOutlineCode key={language} />);
            break;
          default:
            languagesElement.push(<span key={language}>{language}</span>);
        }
        setLangs(languagesElement);
      });
    } else {
      console.log("Failed to retrieve languages, retrying in 1s...");

      setTimeout(() => {
        getLanguages();
      }, 1000);
    }
  }

  React.useEffect(() => {
    getLanguages();
  }, []);

  return (
    <>
      <div className="bluredbottom"></div>
      <div className="content whoami">
        <section id="whoami">
          <div>
            <h2>Qui suis-je ?</h2>

            <blockquote>
              <p>
                <strong>
                  Étudiant en Master 1 Cybersécurité et Développement
                </strong>&nbsp;à l&apos;Université catholique de Lille, je suis un développeur
                passionné par les nouvelles technologies.
                J&apos;ai acquis de l&apos;expérience par le biais de projets personnels et professionnels qui me servent de terrain de jeu pour
                apprendre et me perfectionner.
              </p>
            </blockquote>
          </div>
          <div>
            <h2>Mon parcours</h2>
            <blockquote>
                <p>Actuellement en
                alternance chez <b>Sweeek</b> en tant que <u>Développeur fullstack</u>,
                j&apos;ai eu l&apos;opportunité de travailler sur divers aspects du développement,
                 allant du front-end au back-end, ainsi que sur des tâches de devops. 
                 <br/><br/>Passionné par l&apos;innovation, je m&apos;intéresse particulièrement à 
                 l&apos;intelligence artificielle et au machine learning, et bien évidemment au développement web - domaines dans lesquels je 
                 cherche constamment à approfondir mes connaissances.</p>
                </blockquote>
            

          </div>
          <div>
            <h2>Mes Technologies ?</h2>

            <blockquote>
              <div className="mx-auto w-fit grid gap-3 items-center border p-2 place-items-center grid-flow-col grid-rows-2 ">
                {langs.map((lang) => lang)}
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoAmi;
