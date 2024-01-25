import React from "react";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { TfiAgenda } from "react-icons/tfi";
import "./styles.scss";
import { skillsData, skillsback, skillsdados } from "./utils";

export const Skills = () => {
  return (
    <section>
      <PageHeaderContent
        headerText="Minhas habilidades"
        icon={<TfiAgenda size={40} />}
      />
      <div className="skills">
        <div className="skills__box-container">
          <h1>Front-End</h1>
          <div>
          {skillsData.map((item, key) => (
              <li key={key} className="skills__box-container__skill">
              {item.label}
                
              </li>
            ))}
          </div>
        </div>
        <div className="skills__box-container">
          <h1>Back-End</h1>
          <div>
          {skillsback.map((item, key) => (
              <li key={key} className="skills__box-container__skill">
              {item.label}
                
              </li>
            ))}
          </div>

        </div>
        <div className="skills__box-container">
          <h1>Banco de dados</h1>
          <div>
          <div>
          {skillsdados.map((item, key) => (
              <li key={key} className="skills__box-container__skill">
              {item.label}
                
              </li>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
