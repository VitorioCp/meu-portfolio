import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { educational, personalDetails } from "./utils";

export const About = () => {


  const jobSummary = "Moshi Moshi, Vitório aqui, Engenheiro de software em formaçao, especializado em desenvolvimento web ";

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="Sobre"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-550px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Desenvolvedor Front-end</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(550px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText" >Informações pessoais</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <p className="title">{item.label}</p>
                  <p className="value">{item.value}</p>
                </li>
              ))}
            </ul>
          </Animate>
                
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-550px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText bordaBolinha" >Educação</h3>
            <ul>
              {educational.map((item, i) => (
                <li key={i}>
                  <p className="title">{item.label}</p>
                  <p className="value">{item.value}</p>
                </li>
              ))}
            </ul>
          </Animate>

        </div>

      </div>
    </section>
  );
};
